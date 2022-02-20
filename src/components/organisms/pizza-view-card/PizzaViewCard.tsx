import AppButton from "../../atoms/app-button/AppButton";
import PriceTag from "../../atoms/price-tag/PriceTag";
import PizzaQuantitySelector from "../../molecules/pizza-quantity-selector/PizzaQuantitySelector";
import PizzaSizeSelector from "../../molecules/pizza-size-selector/PizzaSizeSelector";
import { PizzaViewCardProps } from "./PizzaViewCard.d";
import './PizzaViewCard.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'

export default function PizzaViewCard ({ pizza, activeVariation, quantity, onQuantityChange, onVariationChange }: PizzaViewCardProps) {
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
        <AppButton icon={ICCartPlus} small>
          Add to Cart
        </AppButton>
      </div>
    </div>
  )
}
