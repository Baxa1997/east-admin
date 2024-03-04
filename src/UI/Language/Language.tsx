import Select, {StylesConfig} from "react-select";
import styles from "./style.module.scss";
import {CSSProperties} from "react";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import i18next, {t} from "i18next";

const options = [
  {
    label: "O'zbekcha",
    value: "uz",
    icon: "🇺🇿",
  },
  {
    label: "Русский",
    value: "ru",
    icon: "🇷🇺",
  },
  {
    label: "English",
    value: "en",
    icon: "🇺🇸",
  },
];

const getOptionLabel = (option: any) => (
  <div className={styles.option}>
    {option.icon} <span>{option.label}</span>
  </div>
);

function Language() {
  const navigate = useNavigate();

  const changeLanguage = (selectedOption: any) => {
    if (selectedOption && selectedOption.value) {
      i18next.changeLanguage(selectedOption.value);
    }
  };

  const customStyles: StylesConfig = {
    control: (provided: CSSProperties, state) => ({
      ...provided,
      borderRight: 0,
      height: "60px",
      border: "none",
      borderRadius: "50px",
      paddingLeft: "20px",
      paddingRight: "20px",
    }),
    indicatorSeparator: () => ({display: "none"}),
    dropdownIndicator: (provided) => ({
      ...provided,
      fontSize: "36px",
    }),
  };
  return (
    <div className={styles.languages}>
      <h2>Выберите язык</h2>

      <Select
        styles={customStyles}
        options={options}
        className={styles.input}
        getOptionLabel={getOptionLabel}
        isSearchable={false}
        defaultValue={options?.[0]}
        onChange={changeLanguage}
      />

      <Button
        onClick={() => {
          navigate("/id-scanner");
        }}
        variant="outline"
        className="readyBtn">
        Готово
      </Button>
    </div>
  );
}

export default Language;
