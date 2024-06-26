import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function CameraVerify() {
  const navigate = useNavigate();
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => navigate("/personal-info"), 12000);
  }, []);

  return (
    <div className={styles.CameraVerify}>
      <div className="box">
        <h2>{t("camera_look")}</h2>

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

export default CameraVerify;
