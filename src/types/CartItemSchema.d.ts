import { Pizza } from "./Pizza";
import { PizzaVariation } from "./PizzaVariation";

export type CartItemSchema = {
  id: string
  title: string
  tax: number
  image: string
  variation: PizzaVariation
  quantity: number
}

export class CartItem {
  constructor (
    public pizza: Pizza, 
    public variation: PizzaVariation, 
    public quantity: number
  ) {}

  create () {
    console.log(this.pizza)
    return {
      id: this.pizza.id,
      image: this.pizza.image, 
      tax: this.pizza.tax, 
      title: this.pizza.title,
      quantity: this.quantity,
      variation: this.variation
    }
  }
}
