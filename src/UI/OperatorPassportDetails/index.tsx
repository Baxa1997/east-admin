import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";
import {useNavigate} from "react-router-dom";
import AlertModalDemo from "./AlertDialogDemo";
import {useEffect, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {ToastContainer, toast} from "react-toastify";

function PassportDetails() {
  const {form} = useFormContext();
  const {control, setValue, watch} = form;
  const navigate = useNavigate();
  const [checkboxValue, setCheckboxValue] = useState("");
  const [percent, setPercent] = useState<string | null>(null);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const operatorFill = () => {
    if (checkboxValue === "yes") {
      navigate("/operator_view_1");
    } else {
      navigate("/operator-fill");
    }
  };

  const scanPassport = () => {
    fetch("http://127.0.0.1:4001/Regula.SDK.Api/Methods/Connect", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      notify("Connected successfully:");
      res.json();
      getImages();
    });
  };

  const getImages = () => {
    fetch("http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetImages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        notify("Connected successfully:");
        res.json();
        setTimeout(() => {
          getPassportDetails();
        }, 20000);
      })
      .catch((err) => {
        notifyError(err);
      });
  };

  const scanPassportBackSide = () => {
    fetch("http://127.0.0.1:4001/Regula.SDK.Api/Methods/Connect", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json();
      console.log("ressssss Back Side", res.json());
      getImagesBackSide();
    });
  };

  const getImagesBackSide = () => {
    fetch("http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetImages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        notify("Connected successfully:");
        res.json();
        console.log("ressssss getImages Back Side", res.json());
        setTimeout(() => {
          getPassportDetailsBackSide();
          getPassportDetails();
        }, 20000);
      })
      .catch((err) => {
        notifyError(err);
      });
  };

  const seriaNumbers = [1, 2, 3, 4, 5, 20, 34, 39, 0];

  const getPassportDetails = () => {
    seriaNumbers?.forEach((item: number) => {
      fetch(
        `http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetTextFieldByType?AType=${item}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (!res.bodyUsed) {
            return res.text();
          } else {
            throw new Error("Response body already used");
          }
        })
        .then((data) => {
          console.log(`Response for item ${item}:`, data);
          if (item === 1) {
            setValue("nationality", data);
          }
          if (item === 2) {
            setValue("document_number", data);
          }
          if (item === 3) {
            setValue("expired_date", data);
          }
          if (item === 4) {
            setValue("issue_date", data);
          }
          if (item === 5) {
            setValue("birth_date", data);
          }
          if (item === 39) {
            if (data !== null) {
              setValue("issue_by", data);
            } else {
              setValue("issue_by", "");
            }
          } else if (item === 0) {
            if (data?.includes("P")) {
              setValue("document_type", "Passport");
            } else if (data?.includes("IU")) {
              setValue("document_type", "ID card");
            }
          }
        })
        .catch((err) => {
          notifyError(err);
        })
        .finally(() => {});
    });
  };

  const backSide = [8, 9, 129, 12, 11, 24];

  const getPassportDetailsBackSide = () => {
    backSide?.forEach((item) => {
      fetch(
        `http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetTextFieldByTypeAndLCID?AType=${item}&aLCID=1091`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (!res.bodyUsed) {
            return res.json();
          } else {
            throw new Error("Response body already used");
          }
        })
        .then((data) => {
          console.log("Response data: back Side", data);
          if (item === 8) {
            setValue("name", data);
          }
          if (item === 9) {
            setValue("second_name", data);
          }
          if (item === 129) {
            setValue("patronomyc", data);
          }
          if (item === 12) {
            setValue("gender", data);
          }
          if (item === 11) {
            setValue("nationality", data);
          }
          if (item === 24) {
            if (data !== null) {
              setValue("issue_by", data);
            } else {
              setValue("issue_by", "");
            }
          }
        })
        .catch((err) => {
          notifyError(err);
        });
    });
  };

  const notify = (text: string) => {
    toast.success(`${text}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyError = (text: string) => {
    toast.error(`${text}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (watch("name") && watch("second_name") && watch("patronomyc")) {
      setValue(
        "fio",
        `${watch("name")} ${watch("second_name")} ${watch("patronomyc")}`
      );
    }
  }, [watch("name"), watch("second_name"), watch("patronomyc")]);

  const getPercentValue = () => {
    fetch(
      "http://127.0.0.1:4001/Regula.SDK.Api/Methods/CheckReaderResultXML?aType=34&aIdx=0&aOutput=0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.bodyUsed) {
          return res.json();
        } else {
          throw new Error("Response body already used");
        }
      })
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");
        const percentValueElement =
          xmlDoc.getElementsByTagName("PercentValue")[0];
        const percentValue = percentValueElement
          ? percentValueElement.textContent
          : null;
        setPercent(percentValue);
      })
      .catch((err) => {
        console.log("errrrrrrrrrr", err);
      })
      .finally(() => {
        if (typeof percent === "string") {
          if (parseInt(percent) > 60) {
            onOpenModal();
          }
        }
      });
  };

  return (
    <div style={{textAlign: "right", position: "relative"}}>
      <div className={styles.operator_view}>
        <div className={styles.operator_view_left}>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Ф. И. О.</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="fio"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Вид удостоверения</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="document_type"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Серия и номер документа</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="document_number"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Кем выдан </Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="issue_by"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Дата выдачи</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="issue_date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Срок действия</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="expired_date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Дата рождения</Label>
            <HFTextField
              name="birth_date"
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>
        </div>
        <div className={styles.operator_view_right}>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Национальность</Label>
            <HFTextField
              name="nationality"
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>

          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Пол</Label>
            <HFTextField
              name="gender"
              control={control}
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_fill}>
            <Checkbox
              name=""
              checked={checkboxValue !== "no" && checkboxValue !== ""}
              id="no"
              className={"checkBoxRadius"}
              onClick={() => {
                if (checkboxValue === "no") {
                  setCheckboxValue("yes");
                } else {
                  setCheckboxValue("no");
                }
              }}
            />
            <p>Заполнить данные за пользователя</p>
          </div>
        </div>
      </div>
      <AlertModalDemo
        percent={percent}
        onCloseModal={onCloseModal}
        open={open}
      />
      <div className={styles.actionBtns}>
        <div className={styles.actionBtnItemsRight}>
          <Button
            onClick={() => {
              scanPassport();
              setTimeout(() => {
                getPercentValue();
              }, 21000);
            }}
            className={styles.continueBtn}>
            Сканировать лицевую сторону
          </Button>
          <Button
            onClick={() => scanPassportBackSide()}
            className={styles.continueBtn}>
            Сканировать обратную сторону
          </Button>
        </div>

        <div className={styles.actionBtnItemsLeft}>
          <Button onClick={() => navigate(-1)} className={styles.continueBtn}>
            Отмена
          </Button>
          <Button onClick={operatorFill} className={styles.continueBtn}>
            Далее
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PassportDetails;
