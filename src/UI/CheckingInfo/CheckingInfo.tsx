import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {Label} from "@/components/ui/label";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";

function CheckingInfo() {
  const navigate = useNavigate();
  const {form} = useFormContext();
  const {control} = form;
  const {t} = useTranslation();
  const [confirm, setConfirm] = useState(true);

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
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Вид удостоверения</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Адрес прописки</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Серия и номер документа</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Адрес установки</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
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
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
          <div className={styles.infoCheckItems}>
            <Label className="label_sub">Дата рождения</Label>
            <HFTextField classes="inputStylesShort" name="" control={control} />
          </div>
        </div>
      </div>

      <Button
        onClick={() => {
          confirm && navigate("/acceptance-info");
        }}
        className={`${confirm ? "readyBtn" : "disabledBtn"}`}>
        Далее
      </Button>
    </div>
  );
}

export default CheckingInfo;
