import { BillingInformation } from "../../../types/BillingInformation";
import { CartItemSchema } from "../../../types/CartItemSchema";
import { OrderSummaryItemProps } from "../../atoms/order-summary-item/OrderSummaryItem.d";



export function summarizeCart (cart: CartItemSchema[]) {
  const summary: OrderSummaryItemProps[] = []
  let deliveryFee: number = 0

  cart.forEach(cartItem => {
    summary.push({
      cartId: cartItem.cartId,
      label: `${cartItem.title} x${cartItem.quantity}`,
      value: '$' + (cartItem.quantity * cartItem.variation.price).toLocaleString()
    })
    deliveryFee += (cartItem.tax * cartItem.variation.price)
  })

  summary.push({
    cartId: 'delivery',
    label: 'Delivery Fee',
    value: '$'+parseFloat(deliveryFee.toFixed(2)).toLocaleString()
  })

  let total = summary.slice().reduce((a, b) => {
    console.log(a, b)
    return a + parseFloat(b.value.replace('$', ''))
  }, 0)

  return { summary, total }
}

export function summarizeBilling (billingInformation: BillingInformation) {
  const summary: OrderSummaryItemProps[] = []
  summary[0] = {
    cartId: 'name',
    label: 'Name',
    value: billingInformation.lastname + ' ' + billingInformation.firstname
  }
  summary[1]= {
    cartId: 'email',
    label: 'Email Address',
    value: billingInformation.email
  }

  summary[2] = {
    cartId: 'address',
    label: 'Address',
    value: billingInformation.address
  }

  return summary
}


export function summarizePayment (billingInformation: BillingInformation) {
  const summary: OrderSummaryItemProps[] = []
  const last4Digits = billingInformation.card.number.length > 4 ? billingInformation.card.number.substring(billingInformation.card.number.length - 4) : billingInformation.card.number
  summary[0] = {
    cartId: 'card-number',
    label: 'Card Number',
    value: '**** **** **** ' + last4Digits
  }

  summary[1] = {
    cartId: 'expiry-date',
    label: 'Expires',
    value: billingInformation.card.expiry
  }
  return summary
}

export function handleCompletionOfOrder (consent: boolean, action: VoidFunction) {
  if (consent) {
    action()
  }
}
