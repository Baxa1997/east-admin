import {Button} from "@/components/ui/button";
import styles from "./style.module.scss";

function AdminSidebar() {
  return (
    <div className={styles.sidebar}>
      <a href="/" className={"logo"}>
        <img src="/logo2.svg" alt="logo" />
      </a>

      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarMenuItem}>
          <Button className={styles.operatorBtn}>
            <img src="/user-regular.svg" width={18} height={18} alt="" />
            Операторы
          </Button>
        </div>
        <div className={styles.sidebarMenuItem}>
          <Button className={styles.tariffBtn}>
            <img src="/tariff.svg" width={18} height={18} alt="" />
            Тарифы
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
