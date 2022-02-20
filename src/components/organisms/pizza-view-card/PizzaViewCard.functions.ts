import { CartItemSchema } from "../../../types/CartItemSchema";
import { PizzaVariation } from "../../../types/PizzaVariation";

export function isPizzaVariantInCart ( cartItems: CartItemSchema[], cartItemId: String, variation: PizzaVariation ) {
  console.log(cartItems)
  return cartItems.find(item => (item.id === cartItemId && item.variation.id === variation.id)) !== undefined
}
