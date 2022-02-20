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
  
  return summary
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
