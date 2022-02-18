import CloseButton from '../../atoms/close-button/CloseButton'
import PizzaViewCard from '../../organisms/pizza-view-card/PizzaViewCard'
import { PizzaViewProps } from './PizzaView.d'
import './PizzaView.scss'

export default function PizzaView ({ pizza, onClose }: PizzaViewProps) {
  return (
    <section id="pizza-view">
      <div className="pizza-view-container">
        <div className="image">
          <img src={pizza.image} alt={pizza.title.toLocaleLowerCase()} />
          <div className="close-button-container">
            <CloseButton
              onClick={onClose}
            />
          </div>
        </div>
        <div className="pizza-information">
          <PizzaViewCard
            pizza={pizza}
          />
        </div>
      </div>
    </section>
  )
}