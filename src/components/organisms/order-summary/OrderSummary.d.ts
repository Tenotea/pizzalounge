import {BillingInformation} from '../../../types/BillingInformation' 
import { CartItemSchema } from '../../../types/CartItemSchema' 

export type OrderSummaryProps = {
  cart: CartItemSchema[],
  billingInformation: BillingInformation
}
