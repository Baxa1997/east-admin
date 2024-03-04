import {Input} from "@/components/ui/input";
import styles from "./style.module.scss";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

function PersonalInfo() {
  const navigate = useNavigate();
  return (
    <div className={styles.PersonalInfo}>
      <div className={styles.personalInfoItem}>
        <Label className="label" htmlFor="text">
          Номер телефона
        </Label>
        <Input defaultValue={"+ 998 ("} type="text" className="inputStyles" />
      </div>
      <div className={styles.personalInfoItem}>
        <Label className="label" htmlFor="text">
          Адрес прописки
        </Label>
        <Input defaultValue={""} type="text" className="inputStyles" />
      </div>

      <div className={styles.addressConfirm}>
        <Label className="label">Установить по этому адресу?</Label>

        <div className={styles.addressCheckbox}>
          <div className={styles.checking}>
            <Checkbox id="yes" className={"checkBox"} />
            <Label htmlFor="yes" className={"checkboxLabel"}>
              Да
            </Label>
          </div>
          <div className={styles.checking}>
            <Checkbox id="no" className={"checkBox"} />
            <Label htmlFor="no" className={"checkboxLabel"}>
              Нет
            </Label>
          </div>
        </div>

        <Button
          onClick={() => {
            navigate("/address");
          }}
          className="readyBtn">
          Далее
        </Button>
      </div>
    </div>
  );
}

export default PersonalInfo;
