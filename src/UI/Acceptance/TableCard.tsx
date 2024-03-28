import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styles from "./document.module.scss";

function TableCard() {
  return (
    <Table className={styles.customTable}>
      <TableHeader className={styles.customTableHeader}>
        <TableRow className={styles.customTableHeadRow}>
          <TableHead className={styles.customTableHeadCell}>
            Модель модема:
          </TableHead>
          <TableHead className={styles.customTableHeadCell}>
            Cepийний нoмep Moдема
          </TableHead>
          <TableHead className={styles.customTableHeadCell}>
            Количество, штук:
          </TableHead>
          <TableHead className={styles.customTableHeadCell}>
            Стоимость подключения, сум:
          </TableHead>
          <TableHead className={styles.customTableHeadCell}>
            Балансовая станместы сУм Неня с учётом НДС:
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className={styles.customTableBody}>
        <TableRow>
          <TableCell className={styles.customTableCell}></TableCell>
          <TableCell className={styles.customTableCell}>Свой модем</TableCell>
          <TableCell className={styles.customTableCell}>0</TableCell>
          <TableCell className={styles.customTableCell}>0</TableCell>
          <TableCell className={styles.customTableCell}>0</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableCard;
