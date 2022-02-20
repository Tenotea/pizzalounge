import { ComponentMeta } from '@storybook/react'
import OrderSummaryBlock from './OrderSummaryBlock'

export default {
  title: 'Order Summary Block',
  component: OrderSummaryBlock
} as ComponentMeta<typeof OrderSummaryBlock>

export const Default = () => {
  return (
    <OrderSummaryBlock
      heading='Price'
    > </OrderSummaryBlock>
  )
}
