import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

function OperatorFormFill() {
  const {form} = useFormContext();
  const {control} = form;
  const navigate = useNavigate();
  return (
    <div className={styles.operatorFill}>
      <div className={styles.operatorFillBox}>
        <div className={styles.operatorFillBoxItem}>
          <div className={styles.operatorFillItem}>
            <Label className="label_sub">Дата</Label>
            <HFTextField control={control} name="date" />
          </div>
          <div className={styles.operatorFillItem}>
            <Label className="label_sub">Номер договора</Label>
            <HFTextField control={control} name="contract_namae" />
          </div>
        </div>
        <div className={styles.operatorFillBoxItem}>
          <div className={styles.operatorFillItem}>
            <Label className="label_sub">Логин</Label>
            <HFTextField control={control} name="login" />
          </div>
          <div className={styles.operatorFillItem}>
            <Label className="label_sub">Пароль</Label>
            <HFTextField control={control} name="password" />
          </div>
        </div>
      </div>

      <div className={styles.actionBtn}>
        <Button
          onClick={() => navigate("/form-accept")}
          className={styles.nextBtn}>
          Продолжить
        </Button>
      </div>
    </div>
  );
}

export default OperatorFormFill;
