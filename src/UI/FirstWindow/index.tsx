import {useNavigate} from "react-router-dom";
import styles from "./style.module.scss";

function FirstWindow() {
  const navigate = useNavigate();
  return (
    <div className={styles.firstWindow}>
      <div className={styles.userWrapper}>
        <div
          className={styles.userWrapperItem}
          onClick={() => {
            navigate("/operator");
          }}>
          <div className={styles.userWrapperImg}>
            <img width={35} height={35} src="./phone-solid.svg" alt="" />
          </div>
          <h3>Operator</h3>
        </div>
        <div
          className={styles.userWrapperItem}
          onClick={() => {
            navigate("/admin", {
              state: {
                adminLogin: true,
              },
            });
          }}>
          <div className={styles.userWrapperImg}>
            <img width={35} height={35} src="./lock-solid.svg" alt="" />
          </div>
          <h3>Admin</h3>
        </div>
        <div
          className={styles.userWrapperItem}
          onClick={() => {
            navigate("/client");
          }}>
          <div className={styles.userWrapperImg}>
            <img width={35} height={35} src="./user-regular.svg" alt="" />
          </div>
          <h3>Client</h3>
        </div>
      </div>
    </div>
  );
}

export default FirstWindow;
