import AppButton from "../../atoms/app-button/AppButton";
import AppLogo from "../../atoms/app-logo/AppLogo";
import './AppHeader.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'
import { useState } from "react";
import CheckoutTemplate from "../../templates/checkout-template/CheckoutTemplate";

export default function AppHeader () {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  return (
    <header id="app-header">
      <AppLogo />
      <AppButton icon={ICCartPlus} rtl small onClick={() => setIsCheckoutOpen(true)}>
        0
      </AppButton>
      { isCheckoutOpen && <CheckoutTemplate onClose={() => setIsCheckoutOpen(false)} /> }
    </header>
  )
}
