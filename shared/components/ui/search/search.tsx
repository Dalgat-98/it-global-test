import Image from "next/image";
import styles from "./search.module.css";

interface Props {
  inputPlaceholder: string;
  searchIcon: string;
}

export const Seach: React.FC<Props> = ({ inputPlaceholder, searchIcon }) => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder={inputPlaceholder} />
      <Image src={searchIcon} alt="search" width={16} height={16} />
    </div>
  );
};
