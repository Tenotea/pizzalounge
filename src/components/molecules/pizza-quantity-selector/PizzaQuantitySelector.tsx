import AppButton from "../../atoms/app-button/AppButton";
import { PizzaQuantitySelectorProps } from './PizzaQuantitySelector.d'
import './PizzaQuantitySelector.scss'

export default function PizzaQuantitySelector ({ quantity }: PizzaQuantitySelectorProps) {
  return (
    <div id="pizza-quantity-selector">
      <AppButton tiny disabled> - </AppButton>
      <span className="quantity">
        { quantity }
      </span>
      <AppButton tiny> + </AppButton>
    </div>
  )
}