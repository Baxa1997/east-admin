import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import AcceptanceDoc from "./AcceptanceDoc";

function Acceptance() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className={styles.acceptanceInfo}>
      <h2>{t("check_info_for_correction")}</h2>

      <div className={styles.infoBox}>
        <AcceptanceDoc />
      </div>

      <Button
        onClick={() => {
          navigate("/signature");
        }}
        className="readyBtn">
        {t("informed")}
      </Button>
    </div>
  );
}

export default Acceptance;
