import styles from "./style.module.scss";

function Finish() {
  return (
    <div className={styles.Finish}>
      <div className="box">
        <h2>Спасибо, что вы с нами!</h2>
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
