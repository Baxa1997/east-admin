import Select, {StylesConfig} from "react-select";
import {Controller} from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface Props {
  control: any;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  options: Option[];
  classes?: string;
}

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    borderRight: 0,
    border: "none",
    borderRadius: "60px",
    height: window.location.pathname === "/operator_view_1" ? "45px" : "50px",
    marginTop: "10px",
    boxShadow: "15px 15px 50px 0px #00000033",
    padding: "0 0 0 10px",
  }),
  indicatorSeparator: () => ({display: "none"}),
  dropdownIndicator: (provided) => ({
    ...provided,
  }),
};

const CustomDropdownIndicator = () => (
  <div style={{marginRight: "20px"}}>
    <img
      src="/dropdown.svg"
      alt="Custom Dropdown Indicator"
      style={{width: "20px", height: "20px"}}
    />
  </div>
);

function HFSelect({control, name, defaultValue, options, placeholder}: Props) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({field: {onChange, value}}) => (
        <Select
          styles={customStyles}
          name={name}
          options={options}
          value={value}
          placeholder={placeholder}
          components={{DropdownIndicator: CustomDropdownIndicator}}
          defaultValue={defaultValue}
          onChange={(e) => {
            onChange(e);
          }}
        />
      )}
    />
  );
}

export default HFSelect;
