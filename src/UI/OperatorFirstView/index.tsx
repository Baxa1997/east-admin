import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";
import HFSelect from "../FieldElements/HFSelect";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {Checkbox} from "@/components/ui/checkbox";

function OperatorFirstView() {
  const {form} = useFormContext();
  const {control} = form;

  const navigate = useNavigate();

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
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Логин</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Пароль</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Номер телефона</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Тариф</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
        </div>
        <div className={styles.operator_view_right}>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Адрес прописки</Label>
            <div className={styles.operator_view_child}>
              <div className={styles.operator_view_child_item}>
                <HFSelect options={[]} name="" control={control} />
              </div>
              <div className={styles.operator_view_child_item}>
                <HFSelect options={[]} name="" control={control} />
              </div>
            </div>
            <HFTextField
              name=""
              control={control}
              placeholder="Адрес"
              classes="inputStylesShorSmall"
            />
          </div>

          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Адрес установки</Label>
            <div className={styles.operator_view_child}>
              <div className={styles.operator_view_child_item}>
                <HFSelect options={[]} name="" control={control} />
              </div>
              <div className={styles.operator_view_child_item}>
                <HFSelect options={[]} name="" control={control} />
              </div>
            </div>
            <HFTextField
              name=""
              control={control}
              placeholder="Адрес"
              classes="inputStylesShorSmall"
            />
          </div>
        </div>
      </div>
      <Button
        onClick={() => navigate("/final-process")}
        className={styles.continueBtn}>
        Продолжить
      </Button>
    </div>
  );
}

export default OperatorFirstView;
