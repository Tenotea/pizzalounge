import { Pizza } from '../../../types/Pizza'

export type CartItemProps = {
  pizza: Pizza;
  onDelete: (id: string) => void
  onQuantityChange: (quantity: number) => void 
}
