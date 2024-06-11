import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";
import {useNavigate} from "react-router-dom";
import AlertModalDemo from "./AlertDialogDemo";
import {useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {ToastContainer, toast} from "react-toastify";

function PassportDetails() {
  const {form} = useFormContext();
  const {control} = form;
  const navigate = useNavigate();
  const [checkboxValue, setCheckboxValue] = useState("");
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const operatorFill = () => {
    if (checkboxValue === "yes") {
      navigate("/operator-fill");
    } else {
      navigate("/form-accept");
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
      console.log("ressssss", res.json());
      getImages();
    });
  };

  const getImages = () => {
    fetch("http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetImages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      notify("Connected successfully:");
      res.json();
      console.log("ressssss", res.json());
      getPassportDetails();
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

  const seriaNumbers = [1, 2, 3, 4, 5, 20, 34, 39, 0];

  // const getPassportDetails = () => {
  //   seriaNumbers?.map((item) =>
  //     fetch(
  //       `http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetTextFieldByType?aType=${item}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ).then((res) => {
  //       setData(res)
  //       notify("passport details are got:");
  //       res.json();
  //       console.log("ressssss passport details", res, res.json());
  //     })
  //   );
  // };
  const getPassportDetails = () => {
    Promise.all(
      seriaNumbers?.map((item) =>
        fetch(
          `http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetTextFieldByType?aType=${item}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
            notify("passport details are got:");
            return res.json();
          } else {
            notifyError(
              `Failed to get passport details for serial number ${item}:`
            );
            throw new Error(
              `Failed to get passport details for serial number ${item}`
            );
          }
        })
      )
    )
      .then((responses: any) => {
        // Update data state with all responses
        setData(responses);

        notify("passport details are got:");
        responses.json();
        console.log("ressssss passport details", responses, responses.json());
        console.log("dataaaaaaaaaaaaa", data);
      })
      .catch((error) => {
        notifyError("An error occurred while processing the request.");
        console.error("An error occurred:", error);
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
              name="id_type"
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
              name="org_given"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Дата выдачи</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="given_date"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_left_item}>
            <Label className="label_sub">Срок действия</Label>
            <HFTextField
              control={control}
              defaultValue=""
              placeholder=""
              name="deadline"
              classes="inputStylesShorSmall"
            />
          </div>
          <div className={styles.operator_view_right_item}>
            <Label className="label_sub">Дата рождения</Label>
            <HFTextField
              name="date_birth"
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
      <AlertModalDemo onCloseModal={onCloseModal} open={open} />
      <div className={styles.actionBtns}>
        <div className={styles.actionBtnItemsRight}>
          <Button onClick={() => scanPassport()} className={styles.continueBtn}>
            Сканировать лицевую сторону
          </Button>
          <Button onClick={() => onOpenModal()} className={styles.continueBtn}>
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
