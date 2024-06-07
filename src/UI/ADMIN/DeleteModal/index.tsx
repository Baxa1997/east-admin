import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";

interface Props {
  onCloseModal: any;
  open: boolean;
  text: string;
}

const DeleteModal = ({onCloseModal, open, text}: Props) => {
  return (
    <div id={"dialogWrapper"} className={styles.dialogWrapper}>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}>
        <div className={styles.dialog}>
          <h3>{text}</h3>

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
