import PizzaCard from '../../molecules/pizza-card/PizzaCard'
import  { PizzaListProps } from './PizzaList.d'
import './PizzaList.scss'

export default function PizzaList ({ pizzas }: PizzaListProps) {
  return (
    <section id="pizza-list">
      { pizzas.map(pizza => (
        <PizzaCard pizza={pizza} key={pizza.id} />
      ))}
    </section>
  )
}