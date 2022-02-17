import PriceTag from "../../atoms/price-tag/PriceTag";
import { PizzaCardProps } from './PizzaCard.d'
import './PizzaCard.scss'

export default function PizzaCard ({ pizza }: PizzaCardProps) {
  return (
    <div id="pizza-card">
      <div className="image">
        <img src={pizza.image} alt={pizza.title.toLowerCase()} />
      </div>
      <div className="title-container">
        <h4 className="title">
          { pizza.title }
        </h4>
        <PriceTag price={ pizza.variations[0].price } />
      </div>
    </div>
  )
}
