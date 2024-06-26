"use client";
import Select, {StylesConfig} from "react-select";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const options = [
  {
    label: "Русский",
    value: "ru",
    icon: (
      <img
        width="41px"
        height="41px"
        src="/russianflag.svg"
        alt="Russian Flag"
      />
    ),
  },
  {
    label: `O'zbekcha`,
    value: "uz",
    icon: (
      <img width="41px" height="41px" src="/uzbekflag.svg" alt="Uzbek Flag" />
    ),
  },
  {
    label: "English",
    value: "en",
    icon: (
      <img
        width="41px"
        height="41px"
        src="/englishflag.svg"
        alt="English Flag"
      />
    ),
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
      border: "none",
      borderRadius: "60px",
      padding: "3px 12px 0 0px",
    }),
    menuList: () => ({
      overflow: "hidden",
      border: "none",
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
    <div style={{display: "flex", alignItems: "center", padding: "0 0 0 20px"}}>
      <span
        style={{
          marginRight: "17px",
          marginTop: "5px",
        }}>
        {icon}
      </span>
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

  useEffect(() => {
    fetch("http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetImages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("response.json()", response.json());
        response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className={styles.languages}>
      <div className="box">
        <h2>{t("choose_language")}</h2>
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
          navigate("/operator-options");
        }}
        className="readyBtn">
        {t("ready")}
      </Button>
    </div>
  );
}

export default Language;
