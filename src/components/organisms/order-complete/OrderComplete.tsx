import { Link } from "react-router-dom";
import AppButton from "../../atoms/app-button/AppButton";

export default function OrderComplete () {
  return (
    <section>
      <h3>
        Thank you!
      </h3>
      <img src="" alt="" />
      <p>
        Your order was received!
      </p>
      <Link to={'/pizzas'}>
        <AppButton>
          Place Another Order
        </AppButton>
      </Link>
    </section>
  )
}