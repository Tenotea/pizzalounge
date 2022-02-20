import { OrderSummaryItemProps } from './OrderSummaryItem.d'
import './OrderSummaryItem.scss'

export default function OrderSummaryItem ({ label, value }: OrderSummaryItemProps) {
  return (
    <div id="order-summary-item">
      <h6 className="item-label"> { label } </h6>
      <p className="item-value" > { value } </p>
    </div>
  )
}
