import CartItem from '../../molecules/cart-item/CartItem'
import  { CartItemListProps } from './CartItemList.d'
import './CartItemList.scss'

export default function CartItemList ({ cartItems }: CartItemListProps) {
  return (
    <section id="cart-item-list">
      { cartItems.map(pizza => <CartItem
          key={pizza.id}
          pizza={pizza}
          onDelete={() => {}}
          onQuantityChange={() => {}}
        />) 
      }
    </section>
  )
}
