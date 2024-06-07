import {Input} from "@/components/ui/input";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

function AdminListPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.adminList}>
      <div className={styles.adminListHeader}>
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

      <div className={styles.operatorList}>
        <p className={styles.operatorTitle}>Все операторы</p>
        <div className={styles.operatorContent}>
          <div className={styles.operatorContentItem}>
            <div className={styles.operatorContentAvatar}>
              <img src="/avatar 2.png" alt="" />
              <p>annaberiya@gmail.com</p>
            </div>
            <div className={styles.actionBtns}>
              <Button
                onClick={() => {
                  navigate("/admin/add-operator", {
                    state: {
                      status: "EDIT",
                    },
                  });
                }}>
                Изменить
              </Button>
              <div></div>
              <Button>Удалить </Button>
            </div>
          </div>
        </div>
        <Button
          onClick={() =>
            navigate("/admin/add-operator", {
              state: {
                status: "ADD",
              },
            })
          }
          className={styles.addOperatorBtn}>
          Добавить оператора
        </Button>
      </div>
    </div>
  );
}

export default AdminListPage;
