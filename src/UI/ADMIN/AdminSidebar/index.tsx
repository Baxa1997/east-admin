import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";
import {useLocation, useNavigate} from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const operator =
    location?.pathname?.includes("admin-list") ||
    location.pathname?.includes("add-operator")
      ? true
      : false;
  return (
    <div className={styles.sidebar}>
      <a href="/" className={"logo"}>
        <img src="/logo2.svg" alt="logo" />
      </a>

      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarMenuItem}>
          <Button
            onClick={() => navigate("/admin/admin-list")}
            className={operator ? styles.operatorBtnActive : styles.tariffBtn}>
            <img src="/user-regular.svg" width={18} height={18} alt="" />
            Операторы
          </Button>
        </div>
        <div className={styles.sidebarMenuItem}>
          <Button
            onClick={() => navigate("/admin/tariffs")}
            className={!operator ? styles.operatorBtnActive : styles.tariffBtn}>
            <img src="/tariff.svg" width={18} height={18} alt="" />
            Тарифы
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
