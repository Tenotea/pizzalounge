import PriceTag from "../../atoms/price-tag/PriceTag";
import { PizzaViewCardProps } from "./PizzaViewCard.d";
import './PizzaViewCard.scss'

export default function PizzaViewCard ({ pizza }: PizzaViewCardProps) {
  return (
    <div id="pizza-view-card">
      <div className="pizza-view-card-header">
        <h3 className="pizza-view-card-title">
          { pizza.title }
        </h3>
        <PriceTag price={pizza.variations[0].price} />
      </div>

      <div className="pizza-view-sizes-container">
        <p>
          
        </p>
      </div>
    </div>
  )
}
