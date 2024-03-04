import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useNavigate} from "react-router-dom";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

function CheckingInfo() {
  const navigate = useNavigate();
  return (
    <div className={styles.checkingInfo}>
      <h2>Проверьте корректность ваших данных</h2>

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
            Подтверждаю
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
