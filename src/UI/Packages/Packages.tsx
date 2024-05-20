import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useFormContext} from "../FormProvider";

const tariffs = [
  {
    name: "J-15",
    price: "125 000 сум",
    value: "J-15 - 125 000 сум",
  },
  {
    name: "J-30",
    price: "150 000 сум",
    value: "J-30 - 150 000 сум",
  },
  {
    name: "J-60",
    price: "175 000 сум",
    value: "J-60 - 175 000 сум",
  },
];

function Packages() {
  const {form} = useFormContext();
  const {setValue} = form;
  const [tariff, setTariff] = useState("");
  const navigate = useNavigate();
  const {t} = useTranslation();

  const getTarifValue = (item: any) => {
    setTariff(item?.value);
    setValue("tariff", item?.value);
  };

  return (
    <div>
      <div className={styles.rates}>
        <div className="box">
          <h2>{t("choose_rate")}</h2>

          <div className={styles.ratesList}>
            {tariffs?.map((item) => (
              <div className={styles.reatesItem}>
                <h3>{item?.name}</h3>
                <p>{item?.price}</p>
                <Button
                  onClick={() => {
                    getTarifValue(item);
                  }}
                  className={
                    tariff === item?.value ? styles.choseBtn : styles?.chooseBtn
                  }>
                  Выбрать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {tariff && (
        <Button
          onClick={() => {
            navigate("/checking-info");
          }}
          className="readyBtn">
          {t("next")}
        </Button>
      )}
    </div>
  );
}

export default Packages;
