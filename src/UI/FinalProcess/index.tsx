import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";

function FinalProcess() {
  const {form} = useFormContext();
  const {control} = form;

  return (
    <div style={{textAlign: "right"}}>
      <div className={styles.operator_view}>
        <div className={styles.operator_view_left}>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Логин</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
              copyToClip={true}
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
              copyToClip={true}
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Телефон</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Адрес прописки </Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Адрес подключения</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Ф. И. О </Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="date"
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>

          <div className={styles.operator_view_left_item}>
            <div className={styles.operator_viewChild}>
              <div className={styles.operator_viewChild_item}>
                <Label className="label_sub">Выбранный тариф</Label>
                <HFTextField
                  control={control}
                  defaultValue=""
                  placeholder=""
                  name="date"
                  classes="inputStylesShorSmall"
                  copyToClip={true}
                />
              </div>
              <div className={styles.operator_viewChild_item}>
                <Label className="label_sub">
                  Стоимость выбранного тарифа{" "}
                </Label>
                <HFTextField
                  control={control}
                  defaultValue=""
                  placeholder=""
                  name="date"
                  classes="inputStylesShorSmall"
                  copyToClip={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.operator_view_right}>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Номер договора</Label>
            <HFTextField
              name=""
              control={control}
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Вид удостоверения</Label>
            <HFTextField
              name=""
              control={control}
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Серия и номер документа</Label>
            <HFTextField
              name=""
              control={control}
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Кем выдан</Label>
            <HFTextField
              name=""
              control={control}
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>

          <div className={styles.operator_view_right_item}>
            <div className={styles.operator_viewChild}>
              <div className={styles.operator_viewChild_item}>
                <Label className="label_sub">Дата выдачи</Label>
                <HFTextField
                  control={control}
                  defaultValue=""
                  placeholder=""
                  name="date"
                  classes="inputStylesShorSmall"
                  copyToClip={true}
                />
              </div>
              <div className={styles.operator_viewChild_item}>
                <Label className="label_sub">Дата окончания действия </Label>
                <HFTextField
                  control={control}
                  defaultValue=""
                  placeholder=""
                  name="date"
                  classes="inputStylesShorSmall"
                  copyToClip={true}
                />
              </div>
            </div>
          </div>

          <div className={styles.operator_view_right_item}>
            <div className={styles.operator_viewChild}>
              <div className={styles.operator_viewChild_item}>
                <Label className="label_sub">Пол</Label>
                <HFTextField
                  control={control}
                  defaultValue=""
                  placeholder=""
                  name="date"
                  classes="inputStylesShorSmall"
                  copyToClip={true}
                />
              </div>
              <div className={styles.operator_viewChild_item}>
                <Label className="label_sub">Дата рождения </Label>
                <HFTextField
                  control={control}
                  defaultValue=""
                  placeholder=""
                  name="date"
                  classes="inputStylesShorSmall"
                  copyToClip={true}
                />
              </div>
            </div>
            <div className={styles.operator_view_right_item}>
              <Label className="label_sub">Национальность</Label>
              <HFTextField
                name=""
                control={control}
                classes="inputStylesShorSmall"
                copyToClip={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionBtns}>
        <Button className={styles.continueBtn}>Завершить процесс</Button>
      </div>
    </div>
  );
}

export default FinalProcess;
