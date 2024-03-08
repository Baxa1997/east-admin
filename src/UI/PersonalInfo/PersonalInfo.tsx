import {Input} from "@/components/ui/input";
import styles from "./style.module.scss";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function PersonalInfo() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className={styles.PersonalInfo}>
      <div className={styles.personalInfoItem}>
        <Label className="label" htmlFor="text">
          {t("phone_number")}
        </Label>
        <Input defaultValue={"+ 998 ("} type="text" className="inputStyles" />
      </div>
      <div className={styles.personalInfoItem}>
        <Label className="label" htmlFor="text">
          {t("address_propis")}
        </Label>
        <Input defaultValue={""} type="text" className="inputStyles" />
      </div>

      <div className={styles.addressConfirm}>
        <Label className="label">{t("set_this_address")}</Label>

        <div className={styles.addressCheckbox}>
          <div className={styles.checking}>
            <Checkbox id="yes" className={"checkBox"} />
            <Label htmlFor="yes" className={"checkboxLabel"}>
              {t("Yes")}
            </Label>
          </div>
          <div className={styles.checking}>
            <Checkbox id="no" className={"checkBox"} />
            <Label htmlFor="no" className={"checkboxLabel"}>
              {t("No")}
            </Label>
          </div>
        </div>

        <Button
          onClick={() => {
            navigate("/address");
          }}
          className="readyBtn">
          {t("next")}
        </Button>
      </div>
    </div>
  );
}

export default PersonalInfo;
