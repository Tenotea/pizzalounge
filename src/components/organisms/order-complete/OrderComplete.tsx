import AppButton from "../../atoms/app-button/AppButton";
import './OrderComplete.scss'
import IMParkSuccess from '../../../assets/images/park-success.svg'
import ICPizzaForButtonFilled from '../../../assets/icons/ic-pizza-for-button-filled.svg'

export default function OrderComplete ({ onExit }: {onExit: VoidFunction}) {
  return (
    <section id="order-complete">
      <div className="container">
        <h3 className="appreciation">
          Thank you!
        </h3>
        <img src={IMParkSuccess} alt="order complete" className="image" />
        <p className="message">
          Your order was received!
        </p>
          <AppButton icon={ICPizzaForButtonFilled} expand onClick={onExit}>
            Place Another Order
          </AppButton>
      </div>
    </section>
  )
}