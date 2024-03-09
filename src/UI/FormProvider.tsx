import React, {createContext, useContext, ReactNode} from "react";
import {useForm, UseFormReturn} from "react-hook-form";

interface FormContextProps {
  form: UseFormReturn;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const form = useForm();
  return <FormContext.Provider value={{form}}>{children}</FormContext.Provider>;
};
