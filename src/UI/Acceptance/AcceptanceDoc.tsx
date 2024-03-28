import DocumentRules from "./DocumentRules";
import styles from "./document.module.scss";

function AcceptanceDoc() {
  return (
    <div className={styles.documentWrapper}>
      <h2 className={styles.documentHead}>АКЦЕПТ ОФЕРТЫ Nº ________ET</h2>
      <p className={styles.docuemntHeadSub}>
        (Согласие с условиями публичной оферты СП ООО <span>«IST TELEKOM»</span>{" "}
        на оказание услуг сетей передачи данных физическим лицам)
      </p>

      <DocumentRules />

      <div className={styles.documentFooter}>
        <div className={styles.documentFooterAddress}>
          <p>
            <span>
              сп ООО «IST TELEKOM» Банковские реквизиты: P/счет: 2021 4000 4042
              8114 8012{" "}
            </span>
            Банк <span>АО "КДБ Банк Узбекистан"</span> МФО 00842, ИНН{" "}
            <span>204 663 354</span> ОКЭД: <span>61100</span>{" "}
            <span className={styles.docFooterEmail}>
              Регистрационный код (НДС):
            </span>{" "}
            <span> 326010005625</span> Юридический адрес: Узбекистан, г.
            Ташкент, ул.Т. Шевченко, 21{" "}
            <span className={styles.docFooterEmail}>e-mail: info@ets.uz</span>
            Телефон:
            <span> (+99878) 150 00 00</span> Факс: (+99878) 150 01
          </p>
        </div>

        <div className={styles.extraConfirm}>
          <div className={styles.passportSign}>
            Адрес прописки (по паспорту): ________________________________
          </div>

          <div className={styles.signature}>
            <span></span>
            <p>подпись</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptanceDoc;
