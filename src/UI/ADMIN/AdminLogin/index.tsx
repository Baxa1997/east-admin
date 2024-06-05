import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import HFTextField from "@/UI/FieldElements/HFTextField";

function AdminLogin() {
  const navigate = useNavigate();
  const form = useForm();

  const database = {
    admin_user: "admin",
    admin_login: "admin",
    admin_password: "admin",
  };
  function loginUser() {
    const username = form.watch("admin_user");
    const userLogin = form.watch("admin_login");
    const userPassword = form.watch("admin_password");

    const dbUsername = database?.admin_user;
    const dbUserLogin = database?.admin_login;
    const dbUserPassword = database?.admin_password;

    const allFieldsFilled = username && userLogin && userPassword;
    const allFieldsMatch =
      username === dbUsername &&
      userLogin === dbUserLogin &&
      userPassword === dbUserPassword;

    if (allFieldsMatch) {
      notify("Successfully logged!");
      setTimeout(() => navigate("/admin/admin-list"), 600);
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
          <HFTextField
            required={true}
            name="admin_user"
            control={form.control}
          />
        </div>
        <div className={styles.loginInfoItems}>
          <Label className="label_sub">Логин</Label>
          <HFTextField
            required={true}
            name="admin_login"
            control={form.control}
          />
        </div>
        <div className={styles.loginInfoItems}>
          <Label className="label_sub">Пароль</Label>
          <HFTextField
            required={true}
            type="password"
            name="admin_password"
            control={form.control}
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

export default AdminLogin;
