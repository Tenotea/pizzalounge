import { PizzaVariation } from "./PizzaVariation";

export type Pizza = {
  id: string
  title: string
  tax: number
  image: string
  variations: PizzaVariation[]
}
