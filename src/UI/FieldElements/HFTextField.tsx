import React from "react";
import {Controller, useFormContext} from "react-hook-form";

interface HFTextFieldProps {
  name: string;
  defaultValue?: any;
  placeholder?: string;
}

const HFTextField: React.FC<HFTextFieldProps> = ({
  name,
  defaultValue = "",
  placeholder = "",
}) => {
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field}) => (
        <input {...field} type="text" placeholder={placeholder} />
      )}
    />
  );
};

export default HFTextField;
