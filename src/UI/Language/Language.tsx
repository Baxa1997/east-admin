"use client";
import Select, {StylesConfig} from "react-select";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {useFormContext} from "../FormProvider";

const options = [
  {
    label: "🇷🇺 Русский",
    value: "ru",
    icon: "🇷🇺",
  },
  {
    label: "🇺🇿 O'zbekcha",
    value: "uz",
    icon: "🇺🇿",
  },
  {
    label: "🇺🇸 English",
    value: "en",
    icon: "🇺🇸",
  },
];

const getOptionLabel = (option: any) => option.label;

function Language() {
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

  useEffect(() => {
    if (!i18n?.language) {
      i18n.changeLanguage("uz");
    }
  }, []);

  return (
    <div className={styles.languages}>
      <h2>{t("choose_language")}</h2>

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
        className="readyBtn">
        {t("ready")}
      </Button>
    </div>
  );
}

export default Language;
