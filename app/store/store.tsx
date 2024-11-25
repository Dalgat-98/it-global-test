import { create } from "zustand";

type Store = {
  sidebarHiddenFlag: boolean;
  setSidebarHiddenFlag: (flag: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  sidebarHiddenFlag: false,
  setSidebarHiddenFlag: (flag) => set(() => ({ sidebarHiddenFlag: !flag })),
}));
