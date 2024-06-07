import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {Label} from "@/components/ui/label";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";
import {Input} from "@/components/ui/input";
import HFPhoneInput from "../FieldElements/HFPhoneINput";

function CheckingInfo() {
  const navigate = useNavigate();
  const {form} = useFormContext();
  const {control, watch} = form;
  const {t} = useTranslation();
  const [confirm, setConfirm] = useState(true);

  const addressPropiski = `${watch("city")?.value ?? ""} ${
    watch("district")?.value ?? ""
  } ${watch("address") ?? ""}`;

  const addressSetup = `${watch("setup_city")?.value ?? ""} ${
    watch("setup_district")?.value ?? ""
  } ${watch("setup_address") ?? ""}`;

  console.log("addressPropiski", addressPropiski);

  useEffect(() => {
    setConfirm(true);
  }, []);

  return (
    <div className={styles.checkingInfo}>
      <h2>{t("check_correction_info")}</h2>
      <div className={styles.infoBox}>
        <div className={styles.infoCheck}>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Ф. И. О.</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Выбранный тариф</Label>
            <HFTextField
              classes="inputStylesShort"
              name="tariff"
              control={control}
            />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Вид удостоверения</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Адрес прописки</Label>
            <div style={{position: "relative"}}>
              <Input
                value={addressPropiski}
                defaultValue={""}
                type="text"
                className={`inputStylesShort`}
                placeholder={"placeholder"}
              />
            </div>
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Серия и номер документа</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Адрес установки</Label>
            <div style={{position: "relative"}}>
              <Input
                value={addressSetup}
                defaultValue={""}
                type="text"
                className={`inputStylesShort`}
                placeholder={"placeholder"}
              />
            </div>
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Кем выдан</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Пол</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <div className={styles.infoCheckChild}>
              <div className={styles.infoCheckChildItem}>
                <Label className="label_sub">Дата выдачи</Label>
                <HFTextField
                  classes="inputStylesShort"
                  name=""
                  control={control}
                />
              </div>
              <div className={styles.infoCheckChildItem}>
                <Label className="label_sub">Дата окончания действия</Label>
                <HFTextField
                  classes="inputStylesShort"
                  name=""
                  control={control}
                />
              </div>
            </div>
          </div>

          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Национальность</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Номер телефона</Label>
            <HFPhoneInput
              classes="inputStylesShort"
              name="phone_number"
              control={control}
            />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Дата рождения</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <Button
            onClick={() => {
              confirm && navigate("/acceptance-info");
            }}
            className={styles.confirmBtn}>
            Подтверждаю
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckingInfo;
