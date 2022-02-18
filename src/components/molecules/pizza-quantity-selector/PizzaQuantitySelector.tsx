import AppButton from "../../atoms/app-button/AppButton";
import { PizzaQuantitySelectorProps } from './PizzaQuantitySelector.d'
import './PizzaQuantitySelector.scss'

export default function PizzaQuantitySelector ({ quantity }: PizzaQuantitySelectorProps) {
  return (
    <div id="pizza-quantity-selector">
      <AppButton small disabled> - </AppButton>
      <span className="quantity">
        { quantity }
      </span>
      <AppButton small> + </AppButton>
    </div>
  )
}