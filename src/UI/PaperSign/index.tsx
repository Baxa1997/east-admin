import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";

function PapperSign() {
  const navigate = useNavigate();
  return (
    <div className={styles.papperSign}>
      <h2>Подпишите акцепт в бумажном формате</h2>

      <Button
        onClick={() => {
          navigate("/service-rate");
        }}
        className="readyBtn">
        Далее
      </Button>
    </div>
  );
}

export default PapperSign;
