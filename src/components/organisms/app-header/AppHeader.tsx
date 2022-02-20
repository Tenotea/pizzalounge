import AppButton from "../../atoms/app-button/AppButton";
import AppLogo from "../../atoms/app-logo/AppLogo";
import './AppHeader.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'
import { useContext, useState } from "react";
import CheckoutTemplate from "../../templates/checkout-template/CheckoutTemplate";
import { CartContext } from "../../../App";

export default function AppHeader () {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const { cart } = useContext(CartContext) 

  return (
    <header id="app-header">
      <AppLogo />
      <AppButton 
        icon={ICCartPlus} 
        rtl 
        small 
        onClick={() => setIsCheckoutOpen(true)}
      >
        { cart.length }
      </AppButton>
      
      { isCheckoutOpen && 
        <CheckoutTemplate
          onClose={() => setIsCheckoutOpen(false)}
        /> 
      }
    </header>
  )
}
