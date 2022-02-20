import { CartItemSchema } from '../../../types/CartItemSchema'

export type CartItemListProps = {
  cartItems: CartItemSchema[],
  onRemoveFromCart: (cartItem: CartItemSchema) => void
  onQuantityChange: (cartItem: CartItemSchema) => void
}
