import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

function Address() {
  const navigate = useNavigate();
  return (
    <div className={styles.address}>
      <div className={styles.addressInfoItem}>
        <Label className={"label"} htmlFor="text">
          Введите адрес установки
        </Label>
        <Input defaultValue={""} type="text" className={"inputStyles"} />
      </div>

      <Button
        onClick={() => {
          navigate("/rates");
        }}
        className="readyBtn">
        Далее
      </Button>
    </div>
  );
}

export default Address;
