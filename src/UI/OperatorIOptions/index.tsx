"use client";
import Select, {StylesConfig} from "react-select";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const options = [
  {
    label: "Анна",
    value: "anna",
  },
  {
    label: `Сергей`,
    value: "sergey",
  },
  {
    label: "Темур",
    value: "temur",
  },
];

const getOptionLabel = (option: any) => option.label;

function OperatorOptions() {
  const {i18n, t} = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (selectedOption: any) => {
    if (selectedOption && selectedOption.value) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      borderRight: 0,
      border: "none",
      borderRadius: "60px",
      padding: "3px 12px 0 20px",
      height: "100%",
    }),
    indicatorSeparator: () => ({display: "none"}),
    dropdownIndicator: (provided) => ({
      ...provided,
    }),
  };

  useEffect(() => {
    if (!i18n?.language) {
      i18n.changeLanguage("uz");
    }
  }, []);

  const formatOptionLabel = ({label, icon}: any) => (
    <div
      style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <span
        style={{
          marginRight: "17px",
          marginTop: "5px",
        }}></span>
      <span style={{fontSize: "21px"}}>{label}</span>
    </div>
  );

  const CustomDropdownIndicator = () => (
    <div style={{marginRight: "12px"}}>
      <img
        src="/dropdown.svg"
        alt="Custom Dropdown Indicator"
        style={{width: "26px", height: "26px"}}
      />
    </div>
  );

  return (
    <div className={styles.languages}>
      <div className="box">
        <h2>Выберите имя оператора</h2>
        <Select
          styles={customStyles}
          options={options}
          className={styles.input}
          getOptionLabel={getOptionLabel}
          isSearchable={false}
          defaultValue={options?.[0]}
          onChange={changeLanguage}
          formatOptionLabel={formatOptionLabel}
          components={{DropdownIndicator: CustomDropdownIndicator}}
        />
      </div>

      <Button
        onClick={() => {
          navigate("/id-scanner");
        }}
        className="readyBtn">
        {t("ready")}
      </Button>
    </div>
  );
}

export default OperatorOptions;
