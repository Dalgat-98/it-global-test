"use client";

import { useState } from "react";
import Image from "next/image";
import { Seach } from "../ui/search/search";
import { ActionButton } from "../ui/action-button/action-button";

import "./style.css";
import { useStore } from "@/app/store/store";

interface Props {}

const LIST = [
  "Моя работа",
  "Структура портала",
  "Личное расписание",
  "Отсутствие на рабочем месте",
  "Портфель услуг",
  "Дашборды",
  "Доски задач",
  "Обращения",
  "События",
  "Инциденты",
  "Проблемы",
  "Настройка каталогов",
  "Запросы на обслуживание",
  "Запросы на изменение",
  "Управление конфигурациями",
  "Управление уровнем услуг",
  "Настройка соответствий",
];

export const Dashboard: React.FC<Props> = () => {
  // const [sidebarHiddenFlag, setSidebarHiddenFlag] = useState(false);
  const [sidebarSearchStickyFlag, setSidebarSearchStickyFlag] = useState(false);

  const { sidebarHiddenFlag, setSidebarHiddenFlag } = useStore();

  const listLi = LIST.map((item, index) => {
    return (
      <li key={index}>
        <button>
          <Image
            src={"./arrow-right-icon.svg"}
            alt="Раскрыть"
            width={16}
            height={16}
          />
          {item}
        </button>
      </li>
    );
  });

  return (
    <aside className="sidebar">
      <div className={"sidebar-partial"}>
        <ul>
          <li>
            <button
              className="sidebar-partial__button"
              onClick={() => setSidebarHiddenFlag(sidebarHiddenFlag)}
            >
              <Image
                src="./dashboard-icon.svg"
                alt="dashboard"
                width={24}
                height={24}
              />
            </button>
          </li>
          <li>
            <button className="sidebar-partial__button">
              <Image
                src="./dashboard-stars-icon.svg"
                alt="dashboard"
                width={24}
                height={24}
              />
            </button>
          </li>
        </ul>
      </div>

      <div
        className={
          sidebarHiddenFlag === true
            ? "sidebar-full sidebar-full--hidden"
            : "sidebar-full"
        }
        // className="sidebar-full sidebar-full--hidden"
      >
        <div
          className={
            sidebarSearchStickyFlag === true
              ? "sidebar-full__search sidebar-full__search--sticky-search"
              : "sidebar-full__search"
          }
        >
          <div>
            <Seach
              inputPlaceholder={"Поиск по меню"}
              searchIcon={"./search-dashboard-icon.svg"}
            />
          </div>
          <ActionButton
            src={"/button-pin-icon.svg"}
            alt={"Закрепить"}
            width={20}
            height={20}
            onClickFlag={() =>
              setSidebarSearchStickyFlag(!sidebarSearchStickyFlag)
            }
          />
        </div>
        <nav className="sidebar-full__navigation">
          <ul>
            {listLi}
            {listLi}
            {listLi}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
