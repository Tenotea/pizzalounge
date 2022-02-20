import { PizzaVariation } from '../../../types/PizzaVariation'
import { PizzaCardProps } from '../../molecules/pizza-card/PizzaCard.d'
import { PizzaQuantitySelectorProps } from '../../molecules/pizza-quantity-selector/PizzaQuantitySelector.d'

export type PizzaViewCardProps = 
  PizzaCardProps 
  & PizzaQuantitySelectorProps 
  & {
    variation: PizzaVariation;
  }