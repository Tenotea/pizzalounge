import AppButton from "../../atoms/app-button/AppButton";
import AppLogo from "../../atoms/app-logo/AppLogo";
import './AppHeader.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'

export default function AppHeader () {
  return (
    <header id="app-header">
      <AppLogo />
      <AppButton icon={ICCartPlus} rtl small>
        0
      </AppButton>
    </header>
  )
}