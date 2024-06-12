import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";
import HFSelect from "../FieldElements/HFSelect";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

function OperatorFirstView() {
  const {form} = useFormContext();
  const {control} = form;

  const navigate = useNavigate();

  const mockCity = [
    {
      label: "Taшкент",
      value: "Taшкент",
    },
  ];

  const cityDistrict = [
    {
      label: "Чиланзарский район",
      value: "Чиланзарский район",
    },
  ];
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
            <HFTextField
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
            <div className={styles.operator_view_child}>
              <div className={styles.operator_view_child_item}>
                <HFSelect
                  defaultValue={mockCity?.[0]}
                  options={mockCity}
                  name="living_address"
                  control={control}
                />
              </div>
              <div className={styles.operator_view_child_item}>
                <HFSelect
                  defaultValue={[cityDistrict?.[0]]}
                  options={cityDistrict}
                  name="living_district"
                  control={control}
                />
              </div>
            </div>
            <HFTextField
              name="living_address_full"
              control={control}
              placeholder="Адрес"
              classes="inputStylesShorSmall"
            />
          </div>

          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Адрес установки</Label>
            <div className={styles.operator_view_child}>
              <div className={styles.operator_view_child_item}>
                <HFSelect
                  classes="inputStylesShorSmall"
                  options={mockCity}
                  defaultValue={mockCity?.[0]}
                  name="setup_address"
                  control={control}
                />
              </div>
              <div className={styles.operator_view_child_item}>
                <HFSelect
                  defaultValue={cityDistrict?.[0]}
                  options={cityDistrict}
                  name="setup_district"
                  control={control}
                />
              </div>
            </div>
            <HFTextField
              name="setup_address_full"
              control={control}
              placeholder="Адрес"
              classes="inputStylesShorSmall"
            />
          </div>
        </div>
      </div>
      <Button
        onClick={() => navigate("/form-accept")}
        className={styles.continueBtn}>
        Продолжить
      </Button>
    </div>
  );
}

export default OperatorFirstView;
