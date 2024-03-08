import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function CameraVerify() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className={styles.CameraVerify}>
      <h2>{t("camera_look")}</h2>

      <Button
        onClick={() => {
          navigate("/personal-info");
        }}
        className="readyBtn">
        {t("Next")}
      </Button>
    </div>
  );
}

export default CameraVerify;
