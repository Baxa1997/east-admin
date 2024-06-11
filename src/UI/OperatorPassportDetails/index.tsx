import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {Button} from "@/components/ui/button";
import {useFormContext} from "../FormProvider";
import {useNavigate} from "react-router-dom";
import AlertModalDemo from "./AlertDialogDemo";
import {useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";

function PassportDetails() {
  const {form} = useFormContext();
  const {control} = form;
  const navigate = useNavigate();
  const [checkboxValue, setCheckboxValue] = useState("");

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

  const scanPassport = async () => {
    const connectResponse = await axios.get(
      "http://127.0.0.1:4001/Regula.SDK.Api/Methods/Connect",
      {}
    );

    if (connectResponse.status === 200) {
      notify("Connected successfully:");
      console.log("connectResponse", connectResponse);
    }

    // try {
    //   // Step 1: Connect
    //   const connectResponse = await axios.get(
    //     "http://127.0.0.1:4001/Regula.SDK.Api/Methods/Connect",
    //     {}
    //   );

    //   if (connectResponse.status === 200) {
    //     notify("Connected successfully:");
    //     console.log("connectResponse", connectResponse);

    //     // Step 2: GetImages
    //     const getImagesResponse = await axios.get(
    //       "http://127.0.0.1:4001/Regula.SDK.Api/Methods/GetImages",
    //       {}
    //     );

    //     if (getImagesResponse.status === 200) {
    //       notify("Images retrieved successfully");
    //       console.log("getImagesResponse", getImagesResponse);
    //       onOpenModal();
    //     } else {
    //       notifyError("Failed to retrieve images:");
    //       console.error(
    //         "Failed to retrieve images:",
    //         getImagesResponse.status,
    //         getImagesResponse.statusText
    //       );
    //     }
    //   } else {
    //     notifyError("Failed to connect:");
    //     console.error(
    //       "Failed to connect:",
    //       connectResponse.status,
    //       connectResponse.statusText
    //     );
    //   }
    // } catch (error) {
    //   notifyError("An error occurred while processing the request.");
    //   console.error("An error occurred:", error);
    // }
  };

  const notify = (text: string) => {
    toast.success(`🦄 ${text}`, {
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

  // const notifyError = (text: string) => {
  //   toast.error(`🦄 ${text}`, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //   });
  // };

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
