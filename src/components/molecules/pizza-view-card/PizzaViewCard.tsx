import AppButton from "../../atoms/app-button/AppButton";
import PriceTag from "../../atoms/price-tag/PriceTag";
import PizzaQuantitySelector from "../pizza-quantity-selector/PizzaQuantitySelector";
import PizzaSizeSelector from "../pizza-size-selector/PizzaSizeSelector";
import { PizzaViewCardProps } from "./PizzaViewCard.d";
import './PizzaViewCard.scss'
import ICCartPlus from '../../../assets/icons/ic-cart-plus.svg'

export default function PizzaViewCard ({ pizza }: PizzaViewCardProps) {
  return (
    <div id="pizza-view-card">
      <div className="pizza-view-card-header">
        <h3 className="pizza-view-card-title">
          { pizza.title }
        </h3>
        <PriceTag price={pizza.variations[0].price} />
      </div>

      <div className="pizza-view-card-sizes-container">
        <PizzaSizeSelector 
          size="small"
          variations={pizza.variations}
        />
      </div>

      <div className="pizza-view-card-order-container">
        <PizzaQuantitySelector 
          quantity={2}
        />
        <AppButton icon={ICCartPlus}>
          <b> Add to Cart </b>
        </AppButton>
      </div>
    </div>
  )
}
