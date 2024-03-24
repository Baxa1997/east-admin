import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function PapperSign() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className={styles.papperSign}>
      <div className="box">
        <h2>{t("sign_paper")}</h2>
      </div>

      <Button
        onClick={() => {
          navigate("/service-rate");
        }}
        className="readyBtn">
        {t("next")}
      </Button>
    </div>
  );
}

export default PapperSign;
