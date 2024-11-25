import Image from "next/image";

import styles from "./account-info.module.css";

interface Props {
  iconSrc: string;
  name: string;
}

export const AccountInfo: React.FC<Props> = ({ iconSrc, name }) => {
  return (
    <div className={styles["account-info"]}>
      <Image
        className={styles["account-info__image"]}
        src={iconSrc}
        alt={name}
        width={32}
        height={32}
      />
      <p className={styles["account-info__title"]}>{name}</p>
    </div>
  );
};
