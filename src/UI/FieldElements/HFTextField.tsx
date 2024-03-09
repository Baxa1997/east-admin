import {Input} from "@/components/ui/input";
import React from "react";
import {Control, Controller} from "react-hook-form";

interface HFTextFieldProps {
  name: string;
  defaultValue?: any;
  placeholder?: string;
  control: Control;
}

const HFTextField: React.FC<HFTextFieldProps> = ({
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
      render={({field: {onChange, value}}) => (
        <Input
          name={name}
          value={value}
          defaultValue={""}
          type="text"
          className="inputStyles"
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
