"use client";

import { useState } from "react";
import Image from "next/image";
import { ActionButton } from "../../action-button/action-button";
import { SelectedTagInput } from "../../selected-tag-input/selected-tag-input";

import styles from "./input-list.module.css";

interface Props {
  title: string;
  selectedInputList?: string[];
  allVariablesSelected: string[];
}

export const InputList: React.FC<Props> = ({ title, allVariablesSelected }) => {
  const [selectedInputList, setSelectedInputList] = useState<string[]>();
  const [allSelectedInputList, setAllSelectedInputList] = useState<string[]>([
    ...allVariablesSelected,
  ]);
  const [selectedListFlag, setSelectedListFlag] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const allSelectedList = allSelectedInputList?.map((item, index) => {
    return (
      <li key={index}>
        <button onClick={(event) => handleAddSelectedClick(event, item)}>
          <span className={styles["all-selected__item"]}>{item}</span>
        </button>
      </li>
    );
  });

  const handleInputBlur = () => {
    setTimeout(() => {
      const divElement = document.getElementById("div2");
      if (divElement && !divElement.contains(document.activeElement)) {
        setSelectedListFlag(false);
      }
    }, 0);
  };

  const handleAddSelectedClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (selectedInputList) {
      setSelectedInputList([...selectedInputList, name]);
    } else {
      setSelectedInputList([name]);
    }
    setAllSelectedInputList(
      allSelectedInputList.filter((item) => item !== name)
    );
    setInputValue("");
    setSelectedListFlag(false);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() === "") {
      setAllSelectedInputList([...allVariablesSelected]);
    } else {
      const filteredVariables = allVariablesSelected.filter((item) =>
        item.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setAllSelectedInputList(filteredVariables);
    }
  };

  const handleRemoveSelectedClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setSelectedInputList(selectedInputList?.filter((item) => item !== name));
    setAllSelectedInputList([...allSelectedInputList, name]);
  };

  const handleResetClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (selectedInputList) {
      setAllSelectedInputList([...allSelectedInputList, ...selectedInputList]);
    }
    setSelectedInputList([]);
    setSelectedListFlag(false);
  };

  const selectedList = selectedInputList?.map((item, index) => {
    return (
      <SelectedTagInput
        key={index}
        name={item}
        deleteItem={handleRemoveSelectedClick}
      />
    );
  });

  return (
    <div className={styles["input-list"]}>
      <label className={styles["input-list__label"]}>{title}</label>
      <div className={styles["input-list__input-button"]}>
        <div className={styles["input-list__input"]}>
          <div className={styles["input-list__selected-inputs"]}>
            {selectedList}
            <input
              type="text"
              onFocus={() => setSelectedListFlag(true)}
              onBlur={handleInputBlur}
              onChange={(event) => handleChangeInput(event)}
              value={inputValue}
            />
          </div>
          <button onClick={(event) => handleResetClick(event)}>
            <Image
              src="./button-reset-icon.svg"
              alt="очистить"
              width={16}
              height={16}
            />
          </button>
          {selectedListFlag && (
            <div
              id="div2"
              className={styles["input-list__all-selected"]}
              onClick={() => setSelectedListFlag(false)}
            >
              <div className={styles["all-selected__title"]}>
                <h6>Возможные варианты</h6>
                <button onClick={() => setSelectedListFlag(false)}>
                  <Image
                    src="./button-reset-icon.svg"
                    alt="Фильтр"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <ul className={styles["all-selected__list"]}>
                {allSelectedList}
              </ul>
            </div>
          )}
        </div>
        <ActionButton
          src={"./button-plus-icon.svg"}
          alt={"Добавить"}
          width={20}
          height={20}
          onClickFlag={() => setSelectedListFlag(!selectedListFlag)}
        />
        <ActionButton
          src={"./button-search-icon.svg"}
          alt={"Найти"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
