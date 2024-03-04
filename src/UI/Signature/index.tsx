import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import SignaturePad from "react-signature-canvas";

function Signature() {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState<string | null>(null);
  const sigCanvas = useRef<SignaturePad | null>(null);

  const clear = () => sigCanvas.current.clear();

  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  return (
    <div className={styles.signature}>
      <h2>Поставьте подпись</h2>

      <div className={styles.infoBox}>
        <div className={styles.infoBoxItem}>
          <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: "signatureCanvas",
            }}
          />
        </div>
      </div>

      <div className={styles.btns}>
        <Button
          onClick={() => {
            clear();
          }}
          className={styles.btnItems}>
          Заново
        </Button>
        <Button
          onClick={() => {
            save();
            navigate("/paper-sign");
          }}
          className={styles.btnItems}>
          Готово
        </Button>
      </div>
    </div>
  );
}

export default Signature;
