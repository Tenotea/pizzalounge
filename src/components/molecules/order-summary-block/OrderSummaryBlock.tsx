import OrderSummaryItem from "../../atoms/order-summary-item/OrderSummaryItem";
import { OrderSummaryBlockProps } from "./OrderSummaryBlock.d";
import './OrderSummaryBlock.scss'

export default function OrderSummaryBlock ({heading, children}: OrderSummaryBlockProps) {
  return (
    <div id="order-summary-block">
      <h5 className="summary-block-heading">
        { heading }
      </h5>
      <div className="summary-block-body">
        { children }
      </div>
    </div>
  )
}
