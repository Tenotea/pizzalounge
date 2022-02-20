import AppButton from "../../atoms/app-button/AppButton";
import PriceTag from "../../atoms/price-tag/PriceTag";
import PizzaQuantitySelector from "../../molecules/pizza-quantity-selector/PizzaQuantitySelector";
import PizzaSizeSelector from "../../molecules/pizza-size-selector/PizzaSizeSelector";
import { PizzaViewCardProps } from "./PizzaViewCard.d";
import './PizzaViewCard.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'
import { CartItem } from "../../../types/CartItemSchema.d";
import { isPizzaVariantInCart } from "./PizzaViewCard.functions";
import { useContext } from "react";
import { CartContext } from "../../../App";

export default function PizzaViewCard ({ pizza, activeVariation, quantity, onQuantityChange, onVariationChange, onAddToCart }: PizzaViewCardProps) {
  const { cart } = useContext(CartContext)

  return (
    <div id="pizza-view-card">
      <div className="pizza-view-card-header">
        <h3 className="pizza-view-card-title">
          { pizza.title }
        </h3>
        <PriceTag price={activeVariation.price} />
      </div>

      <div className="pizza-view-card-sizes-container">
        <PizzaSizeSelector
          onVariationChange={onVariationChange}
          activeVariation={activeVariation}
          variations={pizza.variations}
        />
      </div>

      <div className="pizza-view-card-order-container">
        <PizzaQuantitySelector
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
        <AppButton icon={ICCartPlus} disabled={isPizzaVariantInCart(cart, pizza.id, activeVariation)} small onClick={() => onAddToCart(new CartItem(pizza, activeVariation, quantity).create())}>
          { isPizzaVariantInCart(cart, pizza.id, activeVariation) ? 'Added to Cart' : 'Add to cart' }
        </AppButton>
      </div>
    </div>
  )
}
