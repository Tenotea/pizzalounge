import { Pizza } from '../types/Pizza'
const variations = [
  { id: 'small', name: 'Small', price: 10 },
  { id: 'medium', name: 'Medium', price: 20 },
  { id: 'large', name: 'Large', price: 30 },
]

const pizzas: Pizza[] = [
  {
    id: '1', 
    image: 'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
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
    variations: variations.slice().slice(1)
  },
  {
    id: '4', 
    image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80', 
    title: 'Pizza Marinara', 
    tax: 0.3,
    variations
  },
  {
    id: '5', 
    image: 'https://images.unsplash.com/photo-1585505008861-a5c378857dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80', 
    title: 'Pizza Margherita extra', 
    tax: 0.3,
    variations: variations.slice().slice(1)
  },
  {
    id: '6', 
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 
    title: 'Chicago Pizza', 
    tax: 0.3,
    variations
  },
  {
    id: '7', 
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', 
    title: 'Pizza Margherita', 
    tax: 0.3,
    variations
  },
  {
    id: '8', 
    image: 'https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
    title: 'Pizza Marinara', 
    tax: 0.3,
    variations
  },
  {
    id: '9', 
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80', 
    title: 'Pizza Margherita extra', 
    tax: 0.3,
    variations: variations.slice().slice(1)
  },
  {
    id: '10', 
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80', 
    title: 'Pizza Marinara', 
    tax: 0.3,
    variations
  },
  {
    id: '11', 
    image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
    title: 'Pizza Margherita extra', 
    tax: 0.3,
    variations: variations.slice().slice(1)
  },
  {
    id: '12', 
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
    title: 'Chicago Pizza', 
    tax: 0.3,
    variations
  },
  {
    id: '13', 
    image: 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80', 
    title: 'Sicilian Pizza', 
    tax: 0.3,
    variations
  },
  {
    id: '14', 
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80', 
    title: 'New York-Style Pizza', 
    tax: 0.3,
    variations
  },
  {
    id: '15', 
    image: 'https://images.unsplash.com/photo-1549118060-fd6cb65d5a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80', 
    title: 'Sicilian Pizza', 
    tax: 0.3,
    variations
  },
  {
    id: '16', 
    image: 'https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', 
    title: 'New York-Style Pizza', 
    tax: 0.3,
    variations
  },
]

export default pizzas