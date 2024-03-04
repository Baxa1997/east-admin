import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";

function Acceptance() {
  const navigate = useNavigate();
  return (
    <div className={styles.acceptanceInfo}>
      <h2>Ознакомьтесь с акцептом и подпишите электронный документ</h2>

      <div className={styles.infoBox}>
        <div className={styles.infoBoxItem}></div>
      </div>

      <Button
        onClick={() => {
          navigate("/signature");
        }}
        className="readyBtn">
        Ознакомлен
      </Button>
    </div>
  );
}

export default Acceptance;
