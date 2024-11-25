"use client";

import styles from "./button.module.css";

interface Props {
  className?: string;
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <button
      onClick={(event) => handleClick(event)}
      className={styles.button + " " + className}
    >
      {children}
    </button>
  );
};
