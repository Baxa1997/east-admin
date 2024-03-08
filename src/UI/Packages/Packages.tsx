import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Packages() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className={styles.rates}>
      <h2>{t("choose_rate")}</h2>

      <Button
        onClick={() => {
          navigate("/checking-info");
        }}
        className="readyBtn">
        {t("next")}
      </Button>
    </div>
  );
}

export default Packages;
