import styles from "./input.module.css";

interface Props {
  title: string;
  type: string;
  isRequired?: boolean;
}

export const Input: React.FC<Props> = ({ title, type, isRequired }) => {
  return (
    <div className={styles["input-container"]}>
      <div className={styles["input-container__label"]}>
        {isRequired && (
          <span className={styles["input-container__required-star"]}>*</span>
        )}
        <label>{title}</label>
      </div>
      <input type={type} />
    </div>
  );
};
