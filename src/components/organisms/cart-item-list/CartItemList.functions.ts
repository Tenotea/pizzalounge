import { CartItemSchema } from "../../../types/CartItemSchema";

export function addToCart (updateFunction: (cart: CartItemSchema[]) => void, cartItems: CartItemSchema[], cartItem: CartItemSchema) {
  if (cartItems.find(item => (item.id === cartItem.id && item.variation.id === cartItem.variation.id))) {
    alert("Item Already in cart!")
    return
  }
  const newCart = [cartItem, ...cartItems.slice()]
  updateFunction(newCart)
}

export function removeFromCart (updateFunction: (cart: CartItemSchema[]) => void, cartItems: CartItemSchema[], cartItem: CartItemSchema) {
  const newCart = cartItems.filter(item => !(item.id === cartItem.id && item.variation.id === cartItem.variation.id))
  updateFunction(newCart)
}

export function updateCartItem (updateFunction: (cart: CartItemSchema[]) => void, cartItems: CartItemSchema[], cartItem: CartItemSchema) {
  const itemIndex = cartItems.findIndex(item => (item.id === cartItem.id && item.variation.id === cartItem.variation.id))
  if (itemIndex !== undefined) {
    const newCart = cartItems.slice()
    newCart[itemIndex] = cartItem
    updateFunction(newCart)
  }
}

export function clearCart (updateFunction: (cart: CartItemSchema[]) => void) {
  updateFunction([])
}
