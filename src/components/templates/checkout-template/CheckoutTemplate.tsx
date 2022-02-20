import AppButton from "../../atoms/app-button/AppButton";
import CartItemList from "../../organisms/cart-item-list/CartItemList";
import CheckoutHeader from "../../organisms/checkout-header/CheckoutHeader";
import { CheckoutTemplateProps } from './CheckoutTemplate.d'
import './CheckoutTemplate.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'
import BillingInformationForm from "../../organisms/billing-information-form/BillingInformationForm";
import { useContext, useState } from "react";
import { CartContext } from "../../../App";
import PageMessage from "../../molecules/page-message/PageMessage";
import { BillingInformation } from "../../../types/BillingInformation";
import { changeCheckoutStep, handleSubmitBillingInformation } from "./ChekcoutTemplate.functions";

export default function CheckoutTemplate({ onClose }: CheckoutTemplateProps) {
  const [currentCheckoutStep, setCurrentCheckoutStep] = useState(0)
  const { cart, removeFromCart, updateCartItem } = useContext(CartContext)
  const [billingInformation, setBillingInformation] = useState({} as BillingInformation)

  return (
    <section id="checkout-template">
      <div className="checkout-template-container">
        <CheckoutHeader
          onClose={onClose}
        >
          My Cart
        </CheckoutHeader>
        {
          cart.length > 0 ? (
            <>
              <div className="checkout-template-body-container">
                {currentCheckoutStep === 0 && <CartItemList cartItems={cart} onQuantityChange={updateCartItem} onRemoveFromCart={removeFromCart} />}
                {currentCheckoutStep === 1 && <BillingInformationForm onSubmit={(formData) => handleSubmitBillingInformation(currentCheckoutStep, formData, setCurrentCheckoutStep, setBillingInformation)} />}
              </div>
              <div className="checkout-template-action-container">
                {currentCheckoutStep > 0 && (
                  <AppButton small activeOnHover>
                    Back
                  </AppButton>
                )}
                {currentCheckoutStep !== 1 && (
                  <div className="checkout-button-container">
                    <AppButton icon={ICCartPlus} small onClick={() => changeCheckoutStep(currentCheckoutStep, setCurrentCheckoutStep)}>
                      Proceed to checkout
                    </AppButton>
                  </div>
                )}
              </div>
            </>
          ) : <PageMessage message="Your Cart Is Empty!" />
        }
      </div>
    </section>
  )
}
