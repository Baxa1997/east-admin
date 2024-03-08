import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {useTranslation} from "react-i18next";

function CheckingInfo() {
  const navigate = useNavigate();
  const {t} = useTranslation();
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
          <Checkbox id="confirm" className={"checkBox"} />
          <Label htmlFor="confirm" className={"checkboxLabel"}>
            {t("confirm")}
          </Label>
        </div>
      </div>

      <Button
        onClick={() => {
          navigate("/acceptance-info");
        }}
        className="readyBtn">
        Далее
      </Button>
    </div>
  );
}

export default CheckingInfo;
