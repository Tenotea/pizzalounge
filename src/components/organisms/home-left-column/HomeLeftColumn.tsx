// import AppButton from "../../atoms/app-button/AppButton";
import ICPizzaForButtonFilled from "../../../assets/icons/ic-pizza-for-button-filled.svg"
import './HomeLeftColumn.scss'
import { Link } from "react-router-dom";
import RS from 'react-sax-demo'

export default function HomeLeftColumn () {
  return (
    <section id="home-left-column">
      <h1 className="catch-phrase">
        Fast and affordable <span className="text-highlight"> pizza </span> delivered to your doorstep
      </h1>
      <Link to={"/pizzas"} style={{maxWidth: 'max-content'}}>
        
        <RS.Button >
          Place an order
        </RS.Button>
      </Link>
    </section>
  )
}
