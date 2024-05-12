import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

function Finish() {
  const navigate = useNavigate();
  return (
    <div className={styles.Finish}>
      <div className="box">
        <h2>Спасибо что вы с нами!</h2>
      </div>

      {/* <Button
        onClick={() => {
          navigate("/");
        }}
        className="readyBtn">
        Finish
      </Button> */}
    </div>
  );
}

export default Finish;
