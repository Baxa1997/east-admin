import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";

function Packages() {
  const navigate = useNavigate();
  return (
    <div className={styles.rates}>
      <h2>Выберите тариф</h2>

      <Button
        onClick={() => {
          navigate("/checking-info");
        }}
        className="readyBtn">
        Далее
      </Button>
    </div>
  );
}

export default Packages;
