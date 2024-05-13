import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";

interface Props {
  onCloseModal: any;
  open: boolean;
}

const AlertModalDemo = ({onCloseModal, open}: Props) => {
  return (
    <div id={"dialogWrapper"} className={styles.dialogWrapper}>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.dialog}>
          <h3>Процент совпадения менее 60%</h3>

          <img width={"57px"} height={"57px"} src="/scan.svg" alt="" />

          <div className={styles.btnScanActions}>
            <Button className={styles.scanBtns}>Сканировать снова</Button>
            <Button className={styles.scanBtns}>Завершить процесс</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AlertModalDemo;
