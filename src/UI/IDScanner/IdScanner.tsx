import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function IdScanner() {
  const navigate = useNavigate();
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => navigate("/camera-verification"), 10000);
  }, []);
  return (
    <div className={styles.idScanner}>
      <div className="box">
        <h2>{t("give_id")}</h2>
        <div className={styles.loader}>
          <PropagateLoader
            color={"#38D8DC"}
            loading={true}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
}

export default IdScanner;
