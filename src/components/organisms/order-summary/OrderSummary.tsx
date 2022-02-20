import { useState } from 'react'
import AppButton from '../../atoms/app-button/AppButton'
import OrderSummaryItem from '../../atoms/order-summary-item/OrderSummaryItem'
import OrderSummaryBlock from '../../molecules/order-summary-block/OrderSummaryBlock'
import OrderSummaryItemList from '../order-summary-item-list/OrderSummaryItemList'
import { OrderSummaryProps } from './OrderSummary.d'
import { handleCompletionOfOrder, summarizeBilling, summarizeCart, summarizePayment } from './OrderSummary.functions'
import './OrderSummary.scss'

export default function OrderSummary({ cart, billingInformation, onProceed }: OrderSummaryProps) {
  const [{ summary, total }] = useState(summarizeCart(cart))
  const [billing] = useState(summarizeBilling(billingInformation))
  const [hasAgreed, setHasAgreed] = useState(false)

  return (
    <section id="order-summary">
      <OrderSummaryBlock heading="Pricing">
        <div>
          <OrderSummaryItemList
            orders={summary} />

          <div className="total-container">
            <OrderSummaryItem cartId='total' label='Total' value={'$' + total.toLocaleString()} />
          </div>
        </div>
      </OrderSummaryBlock>

      <OrderSummaryBlock heading="Delivery">
        <OrderSummaryItemList
          orders={billing} />
      </OrderSummaryBlock>

      <OrderSummaryBlock heading="Payment">
        <OrderSummaryItemList
          orders={summarizePayment(billingInformation)}
        />
      </OrderSummaryBlock>

      <label htmlFor="consent" className="consent-field">
        <input type="checkbox" id="consent" checked={hasAgreed} onChange={() => setHasAgreed(!hasAgreed)} />
         &nbsp;I confirm the order of this wonderful pizza.
      </label>

      <AppButton expand onClick={() => handleCompletionOfOrder(hasAgreed, onProceed)}>
        Complete your order
      </AppButton>
    </section>
  )
}
