import { PizzaVariation } from "../../../types/PizzaVariation";

export function getVariation (variations: PizzaVariation[], id: string) {
  return <PizzaVariation> variations.find(variation => variation.id === id) 
}

export function hasVariant(variations: PizzaVariation[], id: string) {
  return variations.find(variation => variation.id === id) === undefined 
}