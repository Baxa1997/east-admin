import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function IdScanner() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className={styles.idScanner}>
      <div className="box">
        <h2>{t("give_id")}</h2>
      </div>

      <Button
        onClick={() => {
          navigate("/camera-verification");
        }}
        className="readyBtn">
        {t("next")}
      </Button>
    </div>
  );
}

export default IdScanner;
