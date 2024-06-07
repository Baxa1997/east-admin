import {Input} from "@/components/ui/input";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useLocation} from "react-router-dom";

function AdminFormPage() {
  const location = useLocation();

  return (
    <div className={styles.formpage}>
      <div className={styles.formpageHeader}>
        <div className={styles.search}>
          <Input
            type="text"
            placeholder="Search here..."
            className={styles.inputSearch}
          />

          <img
            className={styles.inputSearchIcon}
            src="/ion_search.png"
            alt=""
          />
        </div>
        <div className={styles.operatorInfo}>
          <div className={styles.avatar}>
            <img src="/avatar.png" alt="" />
          </div>
          <p>User 123456</p>
        </div>
      </div>

      <div className={styles.formPageContent}>
        <div className={styles.formPageContentItem}>
          <p>Имя</p>
          <Input type="text" className={styles.formPageInput} />
        </div>
        <div className={styles.formPageContentItem}>
          <p>Логин</p>
          <Input type="text" className={styles.formPageInput} />
        </div>
        <div className={styles.formPageContentItem}>
          <p>Пароль</p>
          <Input type="text" className={styles.formPageInput} />
        </div>
        <div className={styles.formPageContentItem}>
          <Button className={styles.formPageBtn}>
            {location?.state?.status === "ADD" ? "Добавить" : "Сохранить"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminFormPage;
