import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";
import {useNavigate} from "react-router-dom";

function FinalProcess() {
  const {form} = useFormContext();
  const {control} = form;
  const navigate = useNavigate();

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
              name="login"
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
              name="password"
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
              name="phone_number"
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
              name="fullAddressLine"
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
              name="fullAddressLineSetUp"
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
              name="contract_number"
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
                  name="gender"
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
                  name="date_birth"
                  classes="inputStylesShorSmall"
                  copyToClip={true}
                />
              </div>
            </div>
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Национальность</Label>
            <HFTextField
              name="nationality"
              control={control}
              classes="inputStylesShorSmall"
              copyToClip={true}
            />
          </div>
        </div>
      </div>
      <div className={styles.actionBtns}>
        <Button onClick={() => navigate("/")} className={styles.continueBtn}>
          Завершить процесс
        </Button>
      </div>
    </div>
  );
}

export default FinalProcess;
