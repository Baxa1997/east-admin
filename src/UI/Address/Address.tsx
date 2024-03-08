import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Address() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className={styles.address}>
      <div className={styles.addressInfoItem}>
        <Label className={"label"} htmlFor="text">
          {t("enter_setup_address")}
        </Label>
        <Input defaultValue={""} type="text" className={"inputStyles"} />
      </div>

      <Button
        onClick={() => {
          navigate("/rates");
        }}
        className="readyBtn">
        {t("next")}
      </Button>
    </div>
  );
}

export default Address;
