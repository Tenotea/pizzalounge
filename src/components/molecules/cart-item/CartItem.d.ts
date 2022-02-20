import { CartItemSchema } from '../../../types/CartItemSchema'
import { Pizza } from '../../../types/Pizza'

export type CartItemProps = {
  pizza: CartItemSchema;
  onDelete: (pizza: CartItemSchema) => void
  onQuantityChange: (quantity: number) => void 
}
