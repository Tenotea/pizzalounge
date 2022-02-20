import AppButton from "../../atoms/app-button/AppButton";
import { PizzaSizeSelectorProps } from './PizzaSizeSelector.d'
import './PizzaSizeSelector.scss'
import ICPizzaForButtonFilled from '../../../assets/icons/ic-pizza-for-button-filled.svg'
import { getVariation, hasVariant } from "./PizzaSizeSelector.functions";

export default function PizzaSizeSelector ({ variations, activeVariation, onVariationChange }: PizzaSizeSelectorProps) {
  return (
    <div id="pizza-size-selector">
      <p className="pizza-size-selector-label">
        Select a Size
      </p>

      <div className="sizes-container">
        <AppButton 
          small 
          icon={ activeVariation.id === 'small' ? ICPizzaForButtonFilled : '' } 
          disabled={hasVariant(variations, 'small')}
          onClick={() => onVariationChange(getVariation(variations, 'small'))}
          >
          <b> Small </b>
        </AppButton>

        <AppButton 
          small 
          icon={ activeVariation.id === 'medium' ? ICPizzaForButtonFilled : '' }
          disabled={hasVariant(variations, 'medium')}
          onClick={() => onVariationChange(getVariation(variations, 'medium'))}
          > 
          <b> Medium </b> 
        </AppButton>
        
        <AppButton 
          small
          icon={ activeVariation.id === 'large' ? ICPizzaForButtonFilled : '' }
          disabled={hasVariant(variations, 'large')}
          onClick={() => onVariationChange(getVariation(variations, 'large'))}
        > 
          <b> Large </b>
        </AppButton>
      </div>
    </div>
  )
}
