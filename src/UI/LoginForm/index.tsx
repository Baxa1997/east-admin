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
    name: "admin",
    user_login: "admin",
    user_password: "admin",
  };
  const loginUser = () => {
    if (
      watch("username") === database?.name &&
      watch("user_login") === database?.user_login &&
      watch("user_password") === database?.user_password
    ) {
      notify("Successfully logged!");
      setTimeout(() => navigate("/passport-details"), 600);
    } else if (watch("username") !== database?.name) {
      notifyError("Username is incorrect!");
    } else if (watch("user_login") !== database?.user_login) {
      notifyError("Login is incorrect!");
    } else if (watch("user_password") !== database?.user_password) {
      notifyError("Password is incorrect!");
    } else {
      notifyError("Some info is not matching !");
    }
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

  const notifyError = (text: string) => {
    toast.error(`🦄 ${text}`, {
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
          <HFTextField required={true} name="username" control={control} />
        </div>
        <div className={styles.loginInfoItems}>
          <Label className="label_sub">Логин</Label>
          <HFTextField required={true} name="user_login" control={control} />
        </div>
        <div className={styles.loginInfoItems}>
          <Label className="label_sub">Пароль</Label>
          <HFTextField
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
