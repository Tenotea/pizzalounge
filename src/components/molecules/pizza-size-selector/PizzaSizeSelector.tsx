import AppButton from "../../atoms/app-button/AppButton";
import { PizzaSizeSelectorProps } from './PizzaSizeSelector.d'
import './PizzaSizeSelector.scss'

export default function PizzaSizeSelector ({ variations }: PizzaSizeSelectorProps) {
  return (
    <div id="pizza-size-selector">
      <p className="pizza-size-selector-label">
        Select a Size
      </p>

      <div className="sizes-container">
        <AppButton small disabled={variations.find(variation => variation.id === 'small') === undefined}>
          <b> Small </b>
        </AppButton>
        <AppButton small disabled={variations.find(variation => variation.id === 'medium') === undefined}> 
          <b> Medium </b> 
        </AppButton>
        <AppButton small disabled={variations.find(variation => variation.id === 'large') === undefined}> 
          <b> Large </b>
        </AppButton>
      </div>
    </div>
  )
}
