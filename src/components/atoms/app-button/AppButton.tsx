import { AppButtonProps } from "./AppButton.d";
import './AppButton.scss'

export default function AppButton({ children, onClick, icon, rtl, disabled, expand }: AppButtonProps) {
  return (
    <button
      id="app-button" 
      data-testid="app-button" 
      className={`
        ${rtl ? 'rtl': ''}
        ${expand ? 'expand' : ''}
      `}
      onClick={onClick && onClick}
      disabled={disabled}
    >
      {children}
      { icon && <img src={icon} alt='icon' className="btn-icon" /> }
    </button>
  )
}
