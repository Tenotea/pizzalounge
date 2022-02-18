import AppButton from "../../atoms/app-button/AppButton";
import CartItemList from "../../organisms/cart-item-list/CartItemList";
import AppCart from "../../organisms/cart-item-list/CartItemList";
import CheckoutHeader from "../../organisms/checkout-header/CheckoutHeader";
import { CheckoutTemplateProps } from './CheckoutTemplate.d'
import './CheckoutTemplate.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'
import BillingInformationForm from "../../organisms/billing-information-form/BillingInformationForm";
import { useState } from "react";

export default function CheckoutTemplate({ onClose }: CheckoutTemplateProps) {
  const [currentCheckoutStep, setCurrentCheckoutStep] = useState(0)

  return (
    <section id="checkout-template">
      <div className="checkout-template-container">
        <CheckoutHeader
          onClose={onClose}
        >
          My Cart
        </CheckoutHeader>
        <div className="checkout-template-body-container">
          { currentCheckoutStep === 0 && <CartItemList cartItems={[]} /> }
          { currentCheckoutStep === 1 && <BillingInformationForm /> }
        </div>
        
        <div className="checkout-template-action-container">
          <AppButton small activeOnHover>
            Back
          </AppButton>
          <AppButton icon={ICCartPlus} small onClick={() => setCurrentCheckoutStep(currentCheckoutStep < 2  ? currentCheckoutStep + 1 : currentCheckoutStep)}>
            Proceed to checkout
          </AppButton>
        </div>
      </div>
    </section>
  )
}
