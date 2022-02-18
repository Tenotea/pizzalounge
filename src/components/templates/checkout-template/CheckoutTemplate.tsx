import AppButton from "../../atoms/app-button/AppButton";
import CartItemList from "../../organisms/cart-item-list/CartItemList";
import AppCart from "../../organisms/cart-item-list/CartItemList";
import CheckoutHeader from "../../organisms/checkout-header/CheckoutHeader";
import { CheckoutTemplateProps } from './CheckoutTemplate.d'
import './CheckoutTemplate.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'

export default function CheckoutTemplate({ onClose }: CheckoutTemplateProps) {
  return (
    <section id="checkout-template">
      <div className="checkout-template-container">
        <CheckoutHeader
          onClose={onClose}
        >
          My Cart
        </CheckoutHeader>
        <div className="checkout-template-body-container">
          <CartItemList
            cartItems={[
              {
                id: 'demo',
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                tax: 0.25,
                title: 'Pizza with cheese and berry toppings',
                variation: { id: 'small', name: 'Small', price: 10 },
                quantity: 1
              },
              {
                id: 'demo2',
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                tax: 0.25,
                title: 'Pizza with cheese and berry toppings',
                variation: { id: 'small', name: 'Small', price: 10 },
                quantity: 1
              },
              {
                id: 'demo3',
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                tax: 0.25,
                title: 'Pizza with cheese and berry toppings',
                variation: { id: 'small', name: 'Small', price: 10 },
                quantity: 1
              },
            ]}
          />
        </div>
        
        <div className="checkout-template-action-container">
          <AppButton small activeOnHover>
            Back
          </AppButton>
          <AppButton icon={ICCartPlus} small>
            Proceed to checkout
          </AppButton>
        </div>
      </div>
    </section>
  )
}
