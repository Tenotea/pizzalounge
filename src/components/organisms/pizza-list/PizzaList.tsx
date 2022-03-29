import { useState } from 'react'
import { Pizza } from '../../../types/Pizza'
import PizzaCard from '../../molecules/pizza-card/PizzaCard'
import PizzaView from '../../templates/pizza-view/PizzaView'
import  { PizzaListProps } from './PizzaList.d'
import './PizzaList.scss'

export default function PizzaList ({ pizzas }: PizzaListProps) {
  const [pizzaInView, setPizzaInView] = useState(null as Pizza | null)
  return (
    <section id="pizza-list">
      { pizzas.map(pizza => (
        <PizzaCard pizza={pizza} key={pizza.id} onClick={(pizza) => setPizzaInView(pizza) } />
      ))}

      { pizzaInView && <PizzaView pizza={pizzaInView} onClose={() => setPizzaInView(null)} />}
    </section>
  )
}
