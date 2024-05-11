import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const tariffs = [
  {
    name: "J-15",
    price: "125 000 сум",
    value: "j15",
  },
  {
    name: "J-30",
    price: "150 000 сум",
    value: "j30",
  },
  {
    name: "J-60",
    price: "175 000 сум",
    value: "j60",
  },
];

function Packages() {
  const [tariff, setTariff] = useState("");
  const navigate = useNavigate();
  const {t} = useTranslation();

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
                  onClick={() => setTariff(item?.value)}
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
