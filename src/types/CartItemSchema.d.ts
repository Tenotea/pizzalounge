import { Pizza } from "./Pizza";
import { PizzaVariation } from "./PizzaVariation";

export type CartItemSchema = {
  id: string
  cartId: string
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
    return {
      id: this.pizza.id,
      cartId: (Math.random() * 1000).toFixed(0),
      image: this.pizza.image, 
      tax: this.pizza.tax, 
      title: this.pizza.title,
      quantity: this.quantity,
      variation: this.variation
    }
  }
}
