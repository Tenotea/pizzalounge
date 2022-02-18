import AppButton from "../../atoms/app-button/AppButton";
import { QuantitySelectorProps } from './QuantitySelector.d'
import './QuantitySelector.scss'

export default function QuantitySelector ({ quantity }: QuantitySelectorProps) {
  return (
    <div id="quantity-selector">
      <AppButton small disabled> - </AppButton>
      <span className="quantity">
        { quantity }
      </span>
      <AppButton small> + </AppButton>
    </div>
  )
}