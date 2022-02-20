import { useContext } from 'react'
import { CartContext } from '../../../App'
import CartItem from '../../molecules/cart-item/CartItem'
import  { CartItemListProps } from './CartItemList.d'
import './CartItemList.scss'

export default function CartItemList ({ cartItems, onQuantityChange, onRemoveFromCart }: CartItemListProps) {
  return (
    <section id="cart-item-list">
      { cartItems.map(pizza => <CartItem
          key={pizza.cartId}
          pizza={pizza}
          onDelete={onRemoveFromCart}
          onQuantityChange={(qty) => onQuantityChange({...pizza, quantity: qty }) }
        />) 
      }
    </section>
  )
}
