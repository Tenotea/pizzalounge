import { Pizza } from '../../../types/Pizza'

export type PizzaCardProps = {
  pizza: Pizza;
  onClick?: (pizza: Pizza) => void
}
