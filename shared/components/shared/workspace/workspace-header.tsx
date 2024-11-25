import { useRouter } from "next/router";
import { Button } from "../../ui";

import style from "./workspace.module.css";
import Link from "next/link";

interface Props {
  className?: string;
  itIsModal?: boolean;
  closeRouter?: () => void;
}

export const WorkspaceHeader: React.FC<Props> = ({
  className,
  itIsModal,
  closeRouter,
}) => {
  return (
    <header
      className={
        style["workspace-header"] + " " + style[className ? className : ""]
      }
    >
      <div className={style["workspace-header__create-task"]}>
        <h4>Подзадача</h4>
        {!itIsModal && (
          <Link
            className={style["workspace-header__open-modal"]}
            href={"./workspace"}
          >
            Создать
          </Link>
        )}
      </div>
      <div
        className={
          style["workspace-header__save-task"] +
          " " +
          (itIsModal !== true ? style["workspace-header__hidden"] : "")
        }
      >
        <Button className={style["workspace-header__save-task-button"]}>
          Сохранить
        </Button>
        {itIsModal === true ? (
          <button onClick={closeRouter}>Отменить</button>
        ) : (
          <Button>Сохранить и выйти</Button>
        )}
      </div>
    </header>
  );
};
