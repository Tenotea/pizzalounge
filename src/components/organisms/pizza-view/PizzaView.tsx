import PizzaViewCard from '../../molecules/pizza-view-card/PizzaViewCard'
import { PizzaViewProps } from './PizzaView.d'

export default function PizzaView ({ pizza }: PizzaViewProps) {
  return (
    <section id="pizza-view">
      <PizzaViewCard
        pizza={pizza}
      />
    </section>
  )
}