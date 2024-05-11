import {Input} from "@/components/ui/input";
import React from "react";
import {Control, Controller} from "react-hook-form";

interface HFTextFieldProps {
  name: string;
  defaultValue?: any;
  placeholder?: string;
  control: Control;
  classes?: string;
}

const HFTextField: React.FC<HFTextFieldProps> = ({
  name,
  defaultValue = "",
  placeholder = "",
  control,
  classes,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field: {onChange, value}}) => (
        <Input
          name={name}
          value={value}
          defaultValue={""}
          type="text"
          className={`${classes ? classes : "inputStyles"}`}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      )}
    />
  );
};

export default HFTextField;
