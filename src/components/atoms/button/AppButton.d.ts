import { ReactChild } from "react";

export type ButtonProps = {
  children: ReactChild;
  onClick?: () => void
}