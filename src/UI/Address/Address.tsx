import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";

function Address() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const {form} = useFormContext();
  const {control} = form;

  const computedDisable = Boolean(form.watch("setup_address"));
  return (
    <div>
      <div className={styles.address}>
        <div className="box">
          <div className={styles.addressInfoItem}>
            <Label className={"label"} htmlFor="text">
              {t("enter_setup_address")}
            </Label>
            <HFTextField
              name="setup_address"
              control={control}
              placeholder="Enter setup address"
            />
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          computedDisable && navigate("/rates");
        }}
        className={`${computedDisable ? "readyBtn" : "disabledBtn"}`}>
        {t("next")}
      </Button>
    </div>
  );
}

export default Address;
