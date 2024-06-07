import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";

interface Props {
  onCloseModal: any;
  open: boolean;
}

const DeleteModal = ({onCloseModal, open}: Props) => {
  return (
    <div id={"dialogWrapper"} className={styles.dialogWrapper}>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.dialog}>
          <h3>Удалить оператора annaberiya@gmail.com ?</h3>

          <img width={"57px"} height={"57px"} src="/scan.svg" alt="" />

          <div className={styles.btnScanActions}>
            <Button onClick={onCloseModal} className={styles.scanBtns}>
              Подтвердить{" "}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
