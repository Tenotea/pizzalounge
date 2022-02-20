import OrderSummaryBlock from '../../molecules/order-summary-block/OrderSummaryBlock'
import { OrderSummaryProps } from './OrderSummary.d'
import { summarizeBilling, summarizeCart } from './OrderSummary.functions'
import './OrderSummary.scss'

export default function OrderSummary ({ cart, billingInformation }: OrderSummaryProps) {
  return (
    <section id="order-summary">
      <OrderSummaryBlock
        orders={summarizeCart(cart)}
        heading="Pricing"
      />

      <OrderSummaryBlock
        orders={summarizeBilling(billingInformation)}
        heading="Delivery"
      />
    </section>
  )
}
