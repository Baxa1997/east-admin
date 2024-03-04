import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function IdScanner() {
  const navigate = useNavigate();

  return (
    <div className={styles.idScanner}>
      <h2>Передайте ID-карту / Паспорт оператору для сканирования данных</h2>

      <Button
        onClick={() => {
          navigate("/camera-verification");
        }}
        className="readyBtn">
        Далее
      </Button>
    </div>
  );
}

export default IdScanner;
