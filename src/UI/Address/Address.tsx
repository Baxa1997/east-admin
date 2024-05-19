import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";
import HFSelect from "../FieldElements/HFSelect";

export const cities = [
  {
    label: "Tashkent",
    value: "Tashkent",
  },
  {
    label: "Tashkent Region",
    value: "Tashkent Region",
  },
  {
    label: "Samarkand",
    value: "Samarkand",
  },
];

export const regions = [
  {
    label: "Tashkent",
    value: "Tashkent",
  },
  {
    label: "Tashkent Region",
    value: "Tashkent",
  },
  {
    label: "Samarkand",
    value: "Samarkand",
  },
];

function Address() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const {form} = useFormContext();
  const {control} = form;

  const computedDisable = Boolean(form.watch("setup_address"));
  return (
    <div>
      <div className={styles.address}>
        <div className="box">
          <Label className={"label"} htmlFor="text">
            Введите адрес установки
          </Label>
          <div className={styles.addressInfoItem}>
            <div className={styles.addressInfo}>
              <Label className={"label_sub"} htmlFor="text">
                Город
              </Label>
              <HFSelect
                options={cities}
                placeholder=""
                defaultValue=""
                name="setup_city"
                control={control}
              />
            </div>
            <div className={styles.addressInfo}>
              <Label className={"label_sub"} htmlFor="text">
                Район
              </Label>
              <HFSelect
                options={regions}
                placeholder=""
                defaultValue=""
                name="setup_district"
                control={control}
                // placeholder="Enter setup address"
              />
            </div>
            <div className={styles.addressInfo}>
              <Label className={"label_sub"} htmlFor="text">
                Адрес
              </Label>
              <HFTextField
                name="setup_address"
                control={control}
                // placeholder="Enter setup address"
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          computedDisable && navigate("/rates");
        }}
        className={`${computedDisable ? "readyBtn" : "disabledBtn"}`}>
        {t("next")}
      </Button>
    </div>
  );
}

export default Address;
