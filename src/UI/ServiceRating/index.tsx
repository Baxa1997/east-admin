import styles from "./style.module.scss";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function ServiceRating() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  return (
    <div className={styles.serviceRate}>
      <h2>Оцените наш сервис от 1 до 5 и оставьте комментарий</h2>

      <div className={styles.serviceMarks}>
        <div className={styles.serviceMarkItem}>
          <p>1</p>
          <div className={styles.btnMark} onClick={() => setRating(1)}>
            {rating === 1 && <span className={styles.btnActive}></span>}
          </div>
        </div>
        <div className={styles.serviceMarkItem}>
          <p>2</p>
          <div className={styles.btnMark} onClick={() => setRating(2)}>
            {rating === 2 && <span className={styles.btnActive}></span>}
          </div>
        </div>
        <div className={styles.serviceMarkItem}>
          <p>3</p>
          <div className={styles.btnMark} onClick={() => setRating(3)}>
            {rating === 3 && <span className={styles.btnActive}></span>}
          </div>
        </div>
        <div className={styles.serviceMarkItem}>
          <p>4</p>
          <div className={styles.btnMark} onClick={() => setRating(4)}>
            {rating === 4 && <span className={styles.btnActive}></span>}
          </div>
        </div>
        <div className={styles.serviceMarkItem}>
          <p>5</p>
          <div className={styles.btnMark} onClick={() => setRating(5)}>
            {rating === 5 && <span className={styles.btnActive}></span>}
          </div>
        </div>
      </div>
      <Textarea placeholder="" className={styles.comment} />

      <Button
        onClick={() => {
          navigate("/");
        }}
        className="readyBtn">
        Готово
      </Button>
    </div>
  );
}

export default ServiceRating;
