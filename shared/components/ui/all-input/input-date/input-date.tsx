import { ActionButton } from "../../action-button/action-button";
import styles from "./input-date.module.css";

interface Props {
  title: string;
}

export const InputDate: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles["input-date"]}>
      <label className={styles["input-date__title"]}>{title}</label>
      <div className={styles["input-date__input-button"]}>
        <input type="date" />
        <ActionButton
          src={"./button-calendar-icon.svg"}
          alt={"Выбрать дату"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
