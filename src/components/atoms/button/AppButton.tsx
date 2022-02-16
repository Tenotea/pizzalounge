import { ButtonProps } from "./AppButton.d";
import './AppButton.scss'

export default function AppButton({ children, onClick }: ButtonProps) {
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