import { CartItemSchema } from '../../../types/CartItemSchema'
import { PizzaVariation } from '../../../types/PizzaVariation'
import { PizzaCardProps } from '../../molecules/pizza-card/PizzaCard.d'
import { PizzaQuantitySelectorProps } from '../../molecules/pizza-quantity-selector/PizzaQuantitySelector.d'
import { PizzaSizeSelectorProps } from '../../molecules/pizza-size-selector/PizzaSizeSelector.d'

export type PizzaViewCardProps = 
  PizzaCardProps 
  & PizzaQuantitySelectorProps 
  & PizzaSizeSelectorProps
  & { onAddToCart: (cartItem: CartItemSchema) => void }