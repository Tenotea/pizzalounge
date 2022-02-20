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
import { changeCheckoutStep, changeCheckoutStepBackwards, handleSubmitBillingInformation } from "./ChekcoutTemplate.functions";
import OrderSummary from "../../organisms/order-summary/OrderSummary";
import { initialComponentState } from "../../organisms/billing-information-form/BillingInformationForm.functions";
import OrderComplete from "../../organisms/order-complete/OrderComplete";

export default function CheckoutTemplate({ onClose }: CheckoutTemplateProps) {
  const [currentCheckoutStep, setCurrentCheckoutStep] = useState(0)
  const { cart, removeFromCart, updateCartItem, clearCart } = useContext(CartContext)
  const [billingInformation, setBillingInformation] = useState(initialComponentState as BillingInformation)

  return (
    <section id="checkout-template">
      {
        currentCheckoutStep < 3 ? (
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
                    {currentCheckoutStep === 1 && <BillingInformationForm existingFormData={billingInformation} onSubmit={(formData) => handleSubmitBillingInformation(currentCheckoutStep, formData, setCurrentCheckoutStep, setBillingInformation)} />}
                    {currentCheckoutStep === 2 && <OrderSummary cart={cart} billingInformation={billingInformation} onProceed={() => changeCheckoutStep(currentCheckoutStep, setCurrentCheckoutStep)} />}
                  </div>
                  <div className="checkout-template-action-container">
                    {currentCheckoutStep > 0 && (
                      <AppButton small activeOnHover onClick={() => changeCheckoutStepBackwards(currentCheckoutStep, setCurrentCheckoutStep)}>
                        Back
                      </AppButton>
                    )}
                    {currentCheckoutStep === 0 && (
                      <AppButton icon={ICCartPlus} expand small onClick={() => changeCheckoutStep(currentCheckoutStep, setCurrentCheckoutStep)}>
                        Proceed to checkout
                      </AppButton>
                    )}
                  </div>
                </>
              ) : <PageMessage message="Your Cart Is Empty!" />
            }
          </div>
        ) : <OrderComplete onExit={() => {
          onClose()
          clearCart()
        }} />
      }
    </section>
  )
}
