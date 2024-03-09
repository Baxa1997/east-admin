import React from "react";
import {Control, Controller} from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

interface HFTextFieldProps {
  name: string;
  defaultValue?: any;
  placeholder?: string;
  control: Control;
}

const HFPhoneInput: React.FC<HFTextFieldProps> = ({
  name,
  defaultValue = "",
  placeholder = "",
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <PhoneInput
          name={name}
          international
          isValidPhoneNumber
          limitMaxLength={true}
          value={value}
          defaultValue={""}
          type="text"
          className="inputStyles"
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
          }}
        />
      )}
    />
  );
};

export default HFPhoneInput;
