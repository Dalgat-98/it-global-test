import Image from "next/image";
import styles from "./selected-tag-input.module.css";

interface Props {
  name: string;
  deleteItem: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: string
  ) => void;
}

export const SelectedTagInput: React.FC<Props> = ({ name, deleteItem }) => {
  return (
    <div className={styles["user-tag-input"]}>
      <span className={styles["user-tag-input__name"]}>{name}</span>
      <button
        className={styles["user-tag-input__button-delete"]}
        onClick={(event) => deleteItem(event, name)}
      >
        <Image
          src={"./user-tagInput-delete-button.svg"}
          alt={"Удалить"}
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};
