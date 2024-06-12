import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";
import {useNavigate} from "react-router-dom";
import HFPhoneInput from "../FieldElements/HFPhoneINput";
import {useEffect} from "react";

function FormAccept() {
  const {form} = useFormContext();
  const {control, watch, setValue} = form;
  const navigate = useNavigate();
  console.log(watch("living_address"));

  useEffect(() => {
    const fullAddress = `${watch("living_address")?.value}, ${
      watch("living_district")?.[0].value
    }, ${watch("living_address_full")}`;

    setValue("fullAddressLine", fullAddress);
  }, [watch("living_address"), watch("living_district")]);

  useEffect(() => {
    const fullAddress = `${watch("setup_address")?.value}, ${
      watch("setup_district")?.value
    }, ${watch("setup_address_full")}`;

    setValue("fullAddressLineSetUp", fullAddress);
  }, [watch("setup_address"), watch("setup_district")]);

  return (
    <div style={{textAlign: "right"}}>
      <div className={styles.operator_view}>
        <div className={styles.operator_view_left}>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Дата</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Номер договора</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="contract_number"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Логин</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="login"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Пароль</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="password"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Номер телефона</Label>
            <HFPhoneInput
              control={control}
              defaultValue=""
              placeholder=""
              name="phone_number"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Тариф</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="tariff"
              classes="inputStylesShorSmall"
            />
          </div>
        </div>
        <div className={styles.operator_view_right}>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Адрес прописки</Label>
            <HFTextField
              name="fullAddressLine"
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Адрес установки</Label>
            <HFTextField
              name="fullAddressLineSetUp"
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>
        </div>
      </div>
      <div className={styles.actionBtns}>
        <Button
          onClick={() => navigate("/final-process")}
          className={styles.continueBtn}>
          Сформировать Акцепт оферты
        </Button>
      </div>
    </div>
  );
}

export default FormAccept;
