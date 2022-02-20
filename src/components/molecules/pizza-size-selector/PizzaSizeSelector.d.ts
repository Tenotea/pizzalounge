import { PizzaVariation } from '../../../types/PizzaVariation'

export type PizzaSizeSelectorProps = {
  variations: PizzaVariation[]
  activeVariation: PizzaVariation
  onVariationChange: (variation: PizzaVariation) => void
}
