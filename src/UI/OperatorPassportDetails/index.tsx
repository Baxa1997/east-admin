import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";
import {useNavigate} from "react-router-dom";

function PassportDetails() {
  const {form} = useFormContext();
  const {control} = form;
  const navigate = useNavigate();

  return (
    <div style={{textAlign: "right"}}>
      <div className={styles.operator_view}>
        <div className={styles.operator_view_left}>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Ф. И. О.</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Вид удостоверения</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Серия и номер документа</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Кем выдан </Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Дата выдачи</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Срок действия</Label>
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
            <Label className="label_sub">Дата рождения</Label>
            <HFTextField
              name=""
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Национальность</Label>
            <HFTextField
              name=""
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>

          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Пол</Label>
            <HFTextField
              name=""
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>
        </div>
      </div>
      <div className={styles.actionBtns}>
        <Button className={styles.continueBtn}>Сканировать</Button>

        <div className={styles.actionBtnItems}>
          <Button onClick={() => navigate(-1)} className={styles.continueBtn}>
            Отмена
          </Button>
          <Button
            onClick={() => navigate("/operator_view_1")}
            className={styles.continueBtn}>
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PassportDetails;
