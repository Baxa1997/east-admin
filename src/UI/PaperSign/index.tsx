import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PropagateLoader from "react-spinners/PropagateLoader";
import {useEffect, useState} from "react";

function PapperSign() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [signed, setSigned] = useState(true);
  const [loader, setLoader] = useState(true);

  // const checkForSignature = (value: string) => {
  //   if (value === "Yes signed") {
  //     navigate("/service-rate");
  //   } else {
  //     setSigned(false);
  //     setLoader(true);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setSigned(true);
      navigate("/service-rate");
    }, 15000);
  }, [signed]);

  return (
    <div className={styles.papperSign}>
      <div className="box">
        <h2>{t("sign_paper")}</h2>
        <div className={styles.loader}>
          <PropagateLoader
            color={"#38D8DC"}
            loading={loader}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>

      {/* {!loader && (
        <div className={styles.actionBtns}>
          <Button
            onClick={() => checkForSignature("Not yet")}
            className="readyBtn">
            Не подписал
          </Button>
          <Button
            onClick={() => checkForSignature("Yes signed")}
            className="readyBtn">
            Подписал
          </Button>
        </div>
      )} */}
    </div>
  );
}

export default PapperSign;
