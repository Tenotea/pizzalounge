import { PriceTagProps } from './PriceTag.d'
import ICPriceTag from '../../../assets/icons/ic-price-tag-filled.svg'
import './PriceTag.scss'

export default function PriceTag({ price }: PriceTagProps) {
  return (
    <div id="price-tag">
      <p className="price"> ${ price } </p>
      <img src={ICPriceTag} className="tag" alt="pizza lounge price tag" />
    </div>
  )
}
