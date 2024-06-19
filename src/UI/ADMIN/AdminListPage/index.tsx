import {Input} from "@/components/ui/input";
import styles from "./style.module.scss";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import DeleteModal from "../DeleteModal";

function AdminListPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className={styles.adminList}>
      <div className={styles.adminListHeader}>
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
                  navigate(`/admin/edit-operator/${"user123"}`, {
                    state: {
                      status: "EDIT",
                    },
                  });
                }}>
                Изменить
              </Button>
              <div></div>
              <Button onClick={onOpenModal}>Удалить </Button>
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
      <DeleteModal
        text={"Удалить оператора annaberiya@gmail.com ?"}
        onCloseModal={onCloseModal}
        open={open}
      />
    </div>
  );
}

export default AdminListPage;
