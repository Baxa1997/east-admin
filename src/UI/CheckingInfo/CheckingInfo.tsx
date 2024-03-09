import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {useTranslation} from "react-i18next";
import {useState} from "react";

function CheckingInfo() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [confirm, setConfirm] = useState(false);

  return (
    <div className={styles.checkingInfo}>
      <h2>{t("check_correction_info")}</h2>

      <div className={styles.infoBox}>
        <div className={styles.infoBoxItem}>
          <p>
            yasdcuishaiufhyasuhvfbskiuhybaiuhybiyfgiuyfvikuhkfvuduchisuovifuhsiufhlsiuhfuoisuhfiosuhfvsuhflcis
            aishvlibufvhibfvuewpiruhsedoifvhasipufhiwuhvfoiuhrfpuhvruv
            iewhvbruyfouvieuhiuhdicuhiufhuhfouvheoufhourfuh
          </p>
          <p>
            yasdcuishaiufhyasuhvfbskiuhybaiuhybiyfgiuyfvikuhkfvuduchisuovifuhsiufhlsiuhfuoisuhfiosuhfvsuhflcis
            aishvlibufvhibfvuewpiruhsedoifvhasipufhiwuhvfoiuhrfpuhvruv
            iewhvbruyfouvieuhiuhdicuhiufhuhfouvheoufhourfuh
          </p>
          <p>
            yasdcuishaiufhyasuhvfbskiuhybaiuhybiyfgiuyfvikuhkfvuduchisuovifuhsiufhlsiuhfuoisuhfiosuhfvsuhflcis
            aishvlibufvhibfvuewpiruhsedoifvhasipufhiwuhvfoiuhrfpuhvruv
            iewhvbruyfouvieuhiuhdicuhiufhuhfouvheoufhourfuh
          </p>
          <p>
            yasdcuishaiufhyasuhvfbskiuhybaiuhybiyfgiuyfvikuhkfvuduchisuovifuhsiufhlsiuhfuoisuhfiosuhfvsuhflcis
            aishvlibufvhibfvuewpiruhsedoifvhasipufhiwuhvfoiuhrfpuhvruv
            iewhvbruyfouvieuhiuhdicuhiufhuhfouvheoufhourfuh
          </p>
          <p>
            yasdcuishaiufhyasuhvfbskiuhybaiuhybiyfgiuyfvikuhkfvuduchisuovifuhsiufhlsiuhfuoisuhfiosuhfvsuhflcis
            aishvlibufvhibfvuewpiruhsedoifvhasipufhiwuhvfoiuhrfpuhvruv
            iewhvbruyfouvieuhiuhdicuhiufhuhfouvheoufhourfuh
          </p>
        </div>
        <div className={styles.checking}>
          <Checkbox
            onClick={() => setConfirm(!confirm)}
            id="confirm"
            checked={confirm}
            className={"checkBox"}
          />
          <Label htmlFor="confirm" className={"checkboxLabel"}>
            {t("confirm")}
          </Label>
        </div>
      </div>

      <Button
        onClick={() => {
          confirm && navigate("/acceptance-info");
        }}
        className={`${confirm ? "readyBtn" : "disabledBtn"}`}>
        Далее
      </Button>
    </div>
  );
}

export default CheckingInfo;
