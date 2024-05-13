import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";
import {useNavigate} from "react-router-dom";

function FormAccept() {
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
            {/* <Label className="label_sub"></Label> */}
            <div className={styles.operator_textfield}>
              <HFTextField
                control={control}
                defaultValue=""
                placeholder=""
                name="date"
                classes="inputStylesShorSmall"
              />
            </div>
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
            <HFTextField
              name=""
              control={control}
              //   placeholder="Адрес"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Адрес установки</Label>
            <HFTextField
              name=""
              control={control}
              //   placeholder="Адрес"
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
