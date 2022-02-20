import { useContext } from 'react'
import { CartContext } from '../../../App'
import CartItem from '../../molecules/cart-item/CartItem'
import  { CartItemListProps } from './CartItemList.d'
import './CartItemList.scss'

export default function CartItemList ({ cartItems }: CartItemListProps) {
  const { cart } = useContext(CartContext)

  return (
    <section id="cart-item-list">
      { cart.map(pizza => <CartItem
          key={pizza.cartId}
          pizza={pizza}
          onDelete={() => {}}
          onQuantityChange={() => {}}
        />) 
      }
    </section>
  )
}
