import { ButtonProps } from "./button.d";
import './button.scss'

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      id="button" 
      data-testid="button" 
      className={``}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  )
}