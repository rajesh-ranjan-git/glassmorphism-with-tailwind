import { Dispatch, SetStateAction } from "react";

export interface NavbarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}
