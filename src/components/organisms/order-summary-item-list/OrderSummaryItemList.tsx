import OrderSummaryItem from "../../atoms/order-summary-item/OrderSummaryItem";
import { OrderSummaryItemListProps } from './OrderSummaryItemList.d'
import './OrderSummaryItemList.scss'

export default function OrderSummaryItemList ({orders}: OrderSummaryItemListProps) {
  return (
    <div id="order-summary-item-list">
      { orders.map(order => <OrderSummaryItem
            key={order.cartId}
            cartId={order.cartId}
            label={order.label}
            value={order.value}  
          />
        )}
    </div>
  )
}