import { Pizza } from '../types/Pizza'
const variations = [
  { id: 'small', name: 'Small', price: 10 },
  { id: 'medium', name: 'Medium', price: 20 },
  { id: 'large', name: 'Large', price: 30 },
]

const pizzas: Pizza[] = [
  {
    id: '1', 
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
    title: 'Pizza Margherita', 
    tax: 0.3,
    variations
  },
  {
    id: '2', 
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80', 
    title: 'Pizza Marinara', 
    tax: 0.3,
    variations
  },
  {
    id: '3', 
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', 
    title: 'Pizza Margherita extra', 
    tax: 0.3,
    variations
  },
  {
    id: '4', 
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 
    title: 'Chicago Pizza', 
    tax: 0.3,
    variations
  },
  {
    id: '5', 
    image: 'Sicilian Pizza', 
    title: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80', 
    tax: 0.3,
    variations
  },
  {
    id: '6', 
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 
    title: 'New York-Style Pizza', 
    tax: 0.3,
    variations
  },
]

export default pizzas