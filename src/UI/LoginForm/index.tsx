import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import HFTextField from "../FieldElements/HFTextField";
import {useFormContext} from "../FormProvider";
import {Button} from "@/components/ui/button";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";

function LoginForm() {
  const {form} = useFormContext();
  const {control, watch} = form;
  const navigate = useNavigate();

  const database = {
    user_name: "admin",
    user_login: "admin",
    user_password: "admin",
  };
  function loginUser() {
    const username = watch("username");
    const userLogin = watch("user_login");
    const userPassword = watch("user_password");

    const dbUsername = database?.user_name;
    const dbUserLogin = database?.user_login;
    const dbUserPassword = database?.user_password;

    const allFieldsFilled = username && userLogin && userPassword;
    const allFieldsMatch =
      username === dbUsername &&
      userLogin === dbUserLogin &&
      userPassword === dbUserPassword;

    if (allFieldsMatch) {
      notify("Successfully logged!");
      setTimeout(() => navigate("/passport-details"), 600);
    } else if (!allFieldsFilled) {
      notifyError("All fields are required for logging!");
    } else {
      if (username !== dbUsername) {
        notifyError(
          username === "" ? "Username is missing!" : "Username is incorrect!"
        );
      }
      if (userLogin !== dbUserLogin) {
        notifyError(
          userLogin === "" ? "Login is missing!" : "Login is incorrect!"
        );
      }
      if (userPassword !== dbUserPassword) {
        notifyError(
          userPassword === ""
            ? "Password is missing!"
            : "Password is incorrect!"
        );
      }
    }
  }

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

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginInfo}>
        <div className={styles.loginInfoItems}>
          <Label className="label_sub">Имя</Label>
          <HFTextField
            defaultValue={"admin"}
            required={true}
            name="username"
            control={control}
          />
        </div>
        <div className={styles.loginInfoItems}>
          <Label className="label_sub">Логин</Label>
          <HFTextField
            defaultValue={"admin"}
            required={true}
            name="user_login"
            control={control}
          />
        </div>
        <div className={styles.loginInfoItems}>
          <Label className="label_sub">Пароль</Label>
          <HFTextField
            defaultValue={"admin"}
            required={true}
            type="password"
            name="user_password"
            control={control}
          />
        </div>
        <ToastContainer />

        <Button onClick={loginUser} className={styles.loginBtn}>
          Войти
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
