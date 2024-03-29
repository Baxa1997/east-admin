import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import SignaturePad from "react-signature-canvas";
import {useTranslation} from "react-i18next";

function Signature() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [imageURL, setImageURL] = useState<string | null>(null);
  const sigCanvas = useRef<SignaturePad | null>(null);

  const clear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };
  console.log("imageUrl", imageURL);

  const save = () => {
    if (sigCanvas.current) {
      setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    }
  };

  return (
    <div className={styles.signature}>
      <h2>{t("put_signature")}</h2>

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
          {t("again")}
        </Button>
        <Button
          onClick={() => {
            save();
            navigate("/paper-sign");
          }}
          className={styles.btnItems}>
          {t("ready")}
        </Button>
      </div>
    </div>
  );
}

export default Signature;
