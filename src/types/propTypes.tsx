import { Dispatch, SetStateAction } from "react";

export interface ThemeToggleProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}
