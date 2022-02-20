import { useContext, useState } from 'react'
import { CartContext } from '../../../App'
import CloseButton from '../../atoms/close-button/CloseButton'
import PizzaViewCard from '../../organisms/pizza-view-card/PizzaViewCard'
import { PizzaViewProps } from './PizzaView.d'
import './PizzaView.scss'

export default function PizzaView ({ pizza, onClose }: PizzaViewProps) {
  const [selectedVariation, setSelectedVariation] = useState(pizza.variations[0])
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useContext(CartContext)

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
            onAddToCart={(cartItem) => addToCart(cartItem)}
            pizza={pizza}
            activeVariation={selectedVariation}
            quantity={quantity}
            onVariationChange={variation => setSelectedVariation(variation)}
            variations={pizza.variations}
            onQuantityChange={(size) => setQuantity(size)}
          />
        </div>
      </div>
    </section>
  )
}