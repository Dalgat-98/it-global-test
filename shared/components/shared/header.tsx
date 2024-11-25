"use client";

import Image from "next/image";
import Link from "next/link";
import { Seach } from "../ui/search/search";
import { ActionButton } from "../ui/action-button/action-button";
import { AccountInfo } from "../ui/account-info/account-info";

import "./style.css";
import { useStore } from "@/app/store/store";

interface Props {}

export const Header: React.FC<Props> = ({}) => {
  const { sidebarHiddenFlag, setSidebarHiddenFlag } = useStore();

  const NAME: string = "maks";
  const fulname: string = "Максим галактинов";

  return (
    <header className="header">
      <Link className="header__logo" href="/">
        <div>
          <Image src="/logo.png" alt="logo" width={174} height={24} />
        </div>
      </Link>
      <button
        className="header__sidebar-hidden"
        onClick={() => setSidebarHiddenFlag(sidebarHiddenFlag)}
      >
        <Image
          src="./dashboard-icon.svg"
          alt="dashboard"
          width={24}
          height={24}
        />
      </button>
      <div className="header__search-container">
        <div className="header__search">
          <Seach inputPlaceholder={"Поиск"} searchIcon={"./search-icon.svg"} />
        </div>
        <div className="header__settings-container">
          <AccountInfo
            iconSrc={`/account-info-${NAME}-icon.png`}
            name={fulname}
          />
          <ActionButton
            src="/setting-icon.svg"
            alt="setting"
            width={20}
            height={20}
          />
        </div>
      </div>
    </header>
  );
};
