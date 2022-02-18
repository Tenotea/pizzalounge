import { PizzaVariation } from "./PizzaVariation";

export type CartItemSchema = {
  id: string
  title: string
  tax: number
  image: string
  variation: PizzaVariation
  quantity: number
}
