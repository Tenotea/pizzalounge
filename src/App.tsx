import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "./components/organisms/app-header/AppHeader";
import { addToCart, removeFromCart, updateCartItem } from "./components/organisms/cart-item-list/CartItemList.functions";
import HomePage from "./pages/home-page/HomePage";
import PizzasPage from "./pages/pizzas-page/Pizzas";
import { CartItemSchema } from "./types/CartItemSchema";

export const CartContext = React.createContext({
  cart: [] as CartItemSchema[],
  addToCart: (cartItem: CartItemSchema) => {},
  removeFromCart: (cartItem: CartItemSchema) => {},
  updateCartItem: (cartItem: CartItemSchema) => {}
})

export default function App() {
  const [cart, setCart] = useState([] as CartItemSchema[])
  return (
    <CartContext.Provider 
      value={{
        cart: cart,
        addToCart: (cartItem) => addToCart(setCart, cart, cartItem),
        removeFromCart: (cartItem) => removeFromCart(setCart, cart, cartItem),
        updateCartItem: (cartItem) => updateCartItem(setCart, cart, cartItem)
      }}
    >
      <main id="app-body">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizzas" element={<PizzasPage />} />
        </Routes>
      </main>
    </CartContext.Provider>
  );
}
