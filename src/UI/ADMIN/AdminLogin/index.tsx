import {Label} from "@/components/ui/label";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import HFTextField from "@/UI/FieldElements/HFTextField";
import axios from "axios";

function AdminLogin() {
  // const navigate = useNavigate();
  const form = useForm();
  const {handleSubmit} = form;

  const loginUser = (value: any) => {
    console.log("valueeeeeeee", value);

    axios
      .post("http://10.104.108.5:80/api/v1/admin/login", value)
      .then((res: any) => {
        notify("Login success");

        console.log("ressssssssssssss", res);
        if (typeof res === "string") {
          localStorage.setItem("authToken", res);
        }
      })
      .catch((err: any) => notifyError(err));

    // const dbUserLogin = database?.admin_login;
    // const dbUserPassword = database?.admin_password;

    // const allFieldsFilled = userLogin && userPassword;
    // const allFieldsMatch =
    //   userLogin === dbUserLogin && userPassword === dbUserPassword;

    // if (allFieldsMatch) {
    //   notify("Successfully logged!");
    //   setTimeout(() => navigate("/admin/admin-list"), 600);
    // } else if (!allFieldsFilled) {
    //   notifyError("All fields are required for logging!");
    // } else {
    //   if (userLogin !== dbUserLogin) {
    //     notifyError(
    //       userLogin === "" ? "Login is missing!" : "Login is incorrect!"
    //     );
    //   }
    //   if (userPassword !== dbUserPassword) {
    //     notifyError(
    //       userPassword === ""
    //         ? "Password is missing!"
    //         : "Password is incorrect!"
    //     );
    //   }
    // }
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

  return (
    <div className={styles.loginForm}>
      <div className={styles.leftShadow}></div>
      <form onSubmit={handleSubmit(loginUser)} action="">
        <div className={styles.loginInfo}>
          {/* <div className={styles.loginInfoItems}>
            <Label className="label_sub">Имя</Label>
            <HFTextField
              required={true}
              name="admin_user"
              control={form.control}
            />
          </div> */}
          <div className={styles.loginInfoItems}>
            <Label className="label_sub">Логин</Label>
            <HFTextField
              required={true}
              defaultValue={"j.sattarov@etc.uz"}
              name="email"
              control={form.control}
            />
          </div>
          <div className={styles.loginInfoItems}>
            <Label className="label_sub">Пароль</Label>
            <HFTextField
              required={true}
              type="password"
              name="password"
              defaultValue={"password"}
              control={form.control}
            />
          </div>
          <ToastContainer />

          <Button onClick={loginUser} className={styles.loginBtn}>
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
