import { Input, InputDate, InputList } from "../../ui";
import styles from "./workspace.module.css";

interface Props {
  title: string;
}

const AVAILABLE_INPUT_LIST = [
  "Андрей Пивоваров",
  "Максим Галактионов",
  "Алла Лин",
  "Константин Константинопольский Константинович",
  "Игорь Иванченко",
  "Юлия Эйчаровна",
  "Артём Подпрыгайко-Саппортов",
  "Илья Вазнец",
  "Михаил Вортенов",
  "Наталья Нашевна",
  "Евгения Итамовна",
  "Алиса Киральчук",
];

export const WorkspaceForm: React.FC<Props> = ({ title }) => {
  return (
    <section className={styles["workspace-form"]}>
      <h3>{title}</h3>
      <form>
        <section className={styles["workspace-form__two-group"]}>
          <Input title={"Тема"} type={"text"} isRequired={true} />
          <Input title={"Статус"} type={"text"} />
          <Input title={"Описание"} type={"text"} />
          <Input title={"Приоритет"} type={"text"} />
          <InputList
            title={"Ответственный"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
          <InputList
            title={"Группа"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
        </section>
        <section className={styles["workspace-form__one-group"]}>
          <Input title={"Комментарии"} type={"text"} />
          <InputList
            title={"Согласующие"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
        </section>
        <section className={styles["workspace-form__two-group"]}>
          <InputDate title={"Когда открыто"} />
          <InputDate title={"Когда создано"} />
          <InputList
            title={"Кем открыто"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
          <InputList
            title={"Кем создано"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
        </section>

        {/* Ниже удалить, для нагладности header form */}

        <section className={styles["workspace-form__two-group"]}>
          <Input title={"Тема"} type={"text"} isRequired={true} />
          <Input title={"Статус"} type={"text"} />
          <Input title={"Описание"} type={"text"} />
          <Input title={"Приоритет"} type={"text"} />
          <InputList
            title={"Ответственный"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
          <InputList
            title={"Группа"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
        </section>
        <section className={styles["workspace-form__two-group"]}>
          <Input title={"Тема"} type={"text"} isRequired={true} />
          <Input title={"Статус"} type={"text"} />
          <Input title={"Описание"} type={"text"} />
          <Input title={"Приоритет"} type={"text"} />
          <InputList
            title={"Ответственный"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
          <InputList
            title={"Группа"}
            allVariablesSelected={AVAILABLE_INPUT_LIST}
          />
        </section>
      </form>
    </section>
  );
};
