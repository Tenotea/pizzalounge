import { CartItemSchema } from "../../../types/CartItemSchema";

export function addToCart (updateFunction: (cart: CartItemSchema[]) => void, cartItems: CartItemSchema[], cartItem: CartItemSchema) {
  const cart = [cartItem, ...cartItems.slice()]
  console.log(cart)
  updateFunction(cart)
}
