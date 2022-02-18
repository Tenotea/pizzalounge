import { ComponentMeta } from '@storybook/react'
import CartItem from './CartItem' 

export default {
  title: '',
  component: CartItem
} as ComponentMeta<typeof CartItem>

export const Default = () => {
  return (
    <CartItem 
      pizza={{
        id: 'demo',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        tax: 0.25,
        title: 'Pizza with cheese and berry toppings',
        variations: [
          { id: 'small', name: 'Small', price: 10 },
          { id: 'medium', name: 'Medium', price: 20 },
          { id: 'large', name: 'Large', price: 30 },
        ]
      }}
      onDelete={() => {}}
      onQuantityChange={() => {}}
    />
  )
} 
