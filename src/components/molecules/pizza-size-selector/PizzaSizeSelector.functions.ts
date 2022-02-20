import { PizzaVariation } from "../../../types/PizzaVariation";

export function getVariation (variations: PizzaVariation[], id: string) {
  return variations.find(variation => variation.id === id) as PizzaVariation 
}

export function hasVariant(variations: PizzaVariation[], id: string) {
  return variations.find(variation => variation.id === id) === undefined 
}