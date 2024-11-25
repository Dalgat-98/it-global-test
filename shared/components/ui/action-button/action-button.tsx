"use client";

import Image from "next/image";

import styles from "./action-button.module.css";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClickFlag?: (flag: boolean) => void;
}

export const ActionButton: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  onClickFlag,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    onClickFlag && onClickFlag(true);
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <Image src={src} alt={alt} width={width} height={height} />
    </button>
  );
};
