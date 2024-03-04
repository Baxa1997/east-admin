import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";

function CameraVerify() {
  const navigate = useNavigate();
  return (
    <div className={styles.CameraVerify}>
      <h2>Посмотрите в камеру</h2>

      <Button
        onClick={() => {
          navigate("/personal-info");
        }}
        className="readyBtn">
        Далее
      </Button>
    </div>
  );
}

export default CameraVerify;
