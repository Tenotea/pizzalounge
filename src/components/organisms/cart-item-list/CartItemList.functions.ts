import { CartItemSchema } from "../../../types/CartItemSchema";

export function addToCart (updateFunction: (cart: CartItemSchema[]) => void, cartItems: CartItemSchema[], cartItem: CartItemSchema) {
  if (cartItems.find(item => (item.id == cartItem.id && item.variation.id === cartItem.variation.id))) {
    alert("Item Already in cart!")
    return
  }
  const newCart = [cartItem, ...cartItems.slice()]
  updateFunction(newCart)
}
