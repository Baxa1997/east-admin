import {Input} from "@/components/ui/input";
import React from "react";
import {Control, Controller} from "react-hook-form";

interface HFTextFieldProps {
  name: string;
  defaultValue?: any;
  placeholder?: string;
  control?: Control;
  classes?: string;
  copyToClip?: boolean;
  type?: string;
  required?: boolean;
  register?: any;
}

const HFTextField: React.FC<HFTextFieldProps> = ({
  name,
  defaultValue = "",
  placeholder = "",
  control,
  classes,
  copyToClip,
  type = "text",
  required = false,
}) => {
  return (
    <Controller
      name={name}
      rules={{required: "This field is required!"}}
      control={control}
      defaultValue={defaultValue}
      render={({field: {onChange, value}}) => (
        <div style={{position: "relative"}}>
          <Input
            required={required}
            name={name}
            value={value}
            defaultValue={""}
            type={type}
            className={`${classes ? classes : "inputStyles"}`}
            placeholder={placeholder}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
          {copyToClip && (
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                cursor: "pointer",
              }}>
              <img src="/copyicon.svg" alt="" />
            </div>
          )}
        </div>
      )}
    />
  );
};

export default HFTextField;
