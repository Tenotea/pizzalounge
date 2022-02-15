import { ButtonProps } from "./button.d";
import './button.scss'

export default function Button ({ children }: ButtonProps) {
  return (
    <button id="button" className={``}>
      { children }
    </button>
  )
}