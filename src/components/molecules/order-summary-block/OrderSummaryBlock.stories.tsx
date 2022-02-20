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
      orders={[
        {cartId: '1', label: 'Pizza with cheese and berry toppings x5', value: '$10.00'},
        { cartId: '1', label: 'Pizza with cheese and berry toppings x5', value: '$10.00'}
      ]}
    />
  )
}
