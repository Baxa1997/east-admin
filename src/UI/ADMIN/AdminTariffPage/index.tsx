import {Input} from "@/components/ui/input";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useLocation} from "react-router-dom";

function AdminTariffPage() {
  const location = useLocation();

  return (
    <div className={styles.formpage}>
      <div className={styles.formpageHeader}>
        <div className={styles.search}>
          <Input type="text" placeholder="" className={styles.inputSearch} />

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
        <p className={styles.title}>Добавление тарифа</p>
        <div className={styles.formPageContentItem}>
          <p>Наименование тарифа</p>
          <Input type="text" className={styles.formPageInput} />
        </div>
        <div className={styles.formPageContentItem}>
          <p>Стоимость</p>
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

export default AdminTariffPage;
