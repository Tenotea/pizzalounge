import { ComponentMeta } from "@storybook/react";
import OrderSummaryItem from "./OrderSummaryItem";

export default {
  title: 'Order Summary Item',
  component: OrderSummaryItem
} as ComponentMeta<typeof OrderSummaryItem>

export const Default = () => {
  return (
    <OrderSummaryItem
      cartId="1"
      label="Pizza with cheese and berry toppings x1"
      value="$10.00"
    />
  )
}

