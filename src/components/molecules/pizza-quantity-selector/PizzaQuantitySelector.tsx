import AppButton from "../../atoms/app-button/AppButton";
import { PizzaQuantitySelectorProps } from './PizzaQuantitySelector.d'
import './PizzaQuantitySelector.scss'

export default function PizzaQuantitySelector ({ quantity, onQuantityChange }: PizzaQuantitySelectorProps) {
  return (
    <div id="pizza-quantity-selector">
      <AppButton 
        tiny 
        disabled={quantity <= 1}
        onClick={() => onQuantityChange(quantity > 1 ? quantity - 1 : quantity)}
      > - </AppButton>
      <span className="quantity">
        { quantity }
      </span>
      <AppButton 
        tiny
        disabled={quantity >= 10}
        onClick={() => onQuantityChange(quantity < 10 ? quantity + 1 : quantity)}
      > + </AppButton>
    </div>
  )
}