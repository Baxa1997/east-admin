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
import HFSelect from "../FieldElements/HFSelect";

export const cities = [
  {
    label: "Tashkent",
    value: "Tashkent",
  },
  {
    label: "Tashkent Region",
    value: "Tashkent Region",
  },
  {
    label: "Samarkand",
    value: "Samarkand",
  },
];

export const regions = [
  {
    label: "Tashkent",
    value: "Tashkent",
  },
  {
    label: "Tashkent Region",
    value: "Tashkent Region",
  },
  {
    label: "Samarkand",
    value: "Samarkand",
  },
];

function PersonalInfo() {
  const navigate = useNavigate();
  const {form} = useFormContext();
  const {control, setValue} = form;
  const {t} = useTranslation();
  const [checkboxValue, setCheckboxValue] = useState("");

  const computedDisable =
    Boolean(form?.watch("phone_number")) &&
    Boolean(form?.watch("city")) &&
    Boolean(form?.watch("district")) &&
    Boolean(form?.watch("address"));

  const naviageToPage = () => {
    if (checkboxValue === "yes") {
      setValue("setup_city", form.watch("city"));
      setValue("setup_district", form.watch("district"));
      setValue("setup_address", form.watch("address"));
      navigate(`/rates`);
    } else {
      navigate("/address");
    }
  };
  return (
    <div>
      <div className={styles.PersonalInfo}>
        <div className="box">
          <div className={styles.personalInfoItem}>
            <Label className="label" htmlFor="text">
              {t("phone_number")}
            </Label>
            <HFPhoneInput
              name="phone_number"
              control={control}
              defaultValue={"+998"}
              // placeholder={"Enter phone number"}
            />
          </div>

          <div className={styles.addressPropiski}>
            <Label className="label" htmlFor="text">
              {t("address_propis")}
            </Label>

            <div className={styles.addressItems}>
              <div className={styles.addressItemsInfo}>
                <Label className="label_sub" htmlFor="text">
                  Город
                </Label>
                <HFSelect
                  options={cities}
                  name="city"
                  control={control}
                  defaultValue=""
                  placeholder=""

                  // placeholder={"Enter address"}
                />
              </div>
              <div className={styles.addressItemsInfo}>
                <Label className="label_sub" htmlFor="text">
                  Район
                </Label>
                <HFSelect
                  options={regions}
                  name="district"
                  control={control}
                  defaultValue=""
                  placeholder=""
                  // placeholder={"Enter address"}
                />
              </div>
              <div className={styles.addressItemsInfo}>
                <Label className="label_sub" htmlFor="text">
                  Адрес
                </Label>
                <HFTextField
                  name="address"
                  control={control}
                  // placeholder={"Enter address"}
                />
              </div>
              <div className={styles.addressItemsInfo}>
                <div className={styles.addressConfirm}>
                  <Label className="label_sub">{t("set_this_address")}</Label>

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
                        checked={
                          checkboxValue !== "yes" && checkboxValue !== ""
                        }
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
                </div>
              </div>
            </div>
          </div>
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
  );
}

export default PersonalInfo;
