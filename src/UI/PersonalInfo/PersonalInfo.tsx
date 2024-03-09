import styles from "./style.module.scss";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFormContext} from "../FormProvider";
import HFTextField from "../FieldElements/HFTextField";
import HFPhoneInput from "../FieldElements/HFPhoneINput";
import {useState} from "react";

function PersonalInfo() {
  const navigate = useNavigate();
  const {form} = useFormContext();
  const {control} = form;
  const {t} = useTranslation();
  const [checkboxValue, setCheckboxValue] = useState("");

  const computedDisable =
    Boolean(form?.watch("phone_number")) &&
    Boolean(form?.watch("address_of_propiski"));

  const naviageToPage = () => {
    navigate(`/${checkboxValue === "yes" ? "rates" : "address"}`);
  };
  return (
    <div className={styles.PersonalInfo}>
      <div className={styles.personalInfoItem}>
        <Label className="label" htmlFor="text">
          {t("phone_number")}
        </Label>
        <HFPhoneInput
          name="phone_number"
          control={control}
          placeholder={"Enter phone number"}
        />
      </div>
      <div className={styles.personalInfoItem}>
        <Label className="label" htmlFor="text">
          {t("address_propis")}
        </Label>
        <HFTextField
          name="address_of_propiski"
          control={control}
          placeholder={"Enter address"}
        />
      </div>

      <div className={styles.addressConfirm}>
        <Label className="label">{t("set_this_address")}</Label>

        <div className={styles.addressCheckbox}>
          <div className={styles.checking}>
            <Checkbox
              checked={checkboxValue !== "no" && checkboxValue !== ""}
              onClick={() => {
                if (checkboxValue === "yes") {
                  setCheckboxValue("");
                } else {
                  setCheckboxValue("yes");
                }
              }}
              id="yeap"
              className={"checkBox"}
            />
            <Label htmlFor="yeap" className={"checkboxLabel"}>
              {t("Yes")}
            </Label>
          </div>
          <div className={styles.checking}>
            <Checkbox
              checked={checkboxValue !== "yes" && checkboxValue !== ""}
              id="no"
              className={"checkBox"}
              onClick={() => {
                if (checkboxValue === "no") {
                  setCheckboxValue("");
                } else {
                  setCheckboxValue("no");
                }
              }}
            />
            <Label htmlFor="no" className={"checkboxLabel"}>
              {t("No")}
            </Label>
          </div>
        </div>

        <Button
          onClick={() => {
            computedDisable && Boolean(checkboxValue) && naviageToPage();
          }}
          className={`${
            computedDisable && checkboxValue ? "readyBtn" : "disabledBtn"
          }`}>
          {t("next")}
        </Button>
      </div>
    </div>
  );
}

export default PersonalInfo;
