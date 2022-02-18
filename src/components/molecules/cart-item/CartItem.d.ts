import { CartItemSchema } from '../../../types/CartItemSchema'
import { Pizza } from '../../../types/Pizza'

export type CartItemProps = {
  pizza: CartItemSchema;
  onDelete: (id: string) => void
  onQuantityChange: (quantity: number) => void 
}
