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

export default function CheckoutTemplate({ onClose }: CheckoutTemplateProps) {
  const [currentCheckoutStep, setCurrentCheckoutStep] = useState(0)
  const { cart, removeFromCart, updateCartItem } = useContext(CartContext)

  return (
    <section id="checkout-template">
      <div className="checkout-template-container">
        <CheckoutHeader
          onClose={onClose}
        >
          My Cart
        </CheckoutHeader>
        <div className="checkout-template-body-container">
          { currentCheckoutStep === 0 && <CartItemList cartItems={cart} onQuantityChange={updateCartItem} onRemoveFromCart={removeFromCart} /> }
          { currentCheckoutStep === 1 && <BillingInformationForm /> }
        </div>
        {
          cart.length > 0 ? (
            <div className="checkout-template-action-container">
              { currentCheckoutStep > 0 && (
                <AppButton small activeOnHover>
                  Back
                </AppButton>
              )}
              <AppButton icon={ICCartPlus} small onClick={() => setCurrentCheckoutStep(currentCheckoutStep < 2  ? currentCheckoutStep + 1 : currentCheckoutStep)}>
                Proceed to checkout
              </AppButton>
            </div>
          ) : <PageMessage message="Your Cart Is Empty!" />
        }
      </div>
    </section>
  )
}
