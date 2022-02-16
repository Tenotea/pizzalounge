import IMHomePizza from '../../../assets/images/home-pizza-bottom.png'
// import IMHomePizza from '../../../../assets/images/home-pizza.png'
import './HomePizzaImage.scss'

export default function HomePizzaImage () {
  return (
    <section id="home-pizza-image">
      <img src={IMHomePizza} alt="pizza lounge" />
    </section>
  )
}
