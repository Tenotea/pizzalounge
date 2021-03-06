import { AppButtonProps } from "./AppButton.d";
import './AppButton.scss'

export default function AppButton({ children, onClick, icon, rtl, disabled, expand, small, tiny, activeOnHover}: AppButtonProps) {
  return (
    <button
      id="app-button" 
      data-testid="app-button" 
      className={`
        ${rtl ? 'rtl': ''}
        ${expand ? 'expand' : ''}
        ${small ? 'small' : ''}
        ${tiny ? 'tiny' : ''}
        ${activeOnHover ? 'active-on-hover' : ''}
      `}
      onClick={onClick && onClick}
      disabled={disabled}
    >
      {children}
      { icon && <img src={icon} alt='icon' className="btn-icon" /> }
    </button>
  )
}
