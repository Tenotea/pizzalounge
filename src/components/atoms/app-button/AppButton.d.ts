import { ReactChild } from "react";

export type AppButtonProps = {
  children: ReactChild
  icon?: string
  expand?: boolean
  rtl?: boolean
  disabled?: boolean
  activeOnHover?:boolean
  small?: boolean
  tiny?: boolean
  onClick?: () => void
}