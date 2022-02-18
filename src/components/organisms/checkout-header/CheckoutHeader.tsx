import CloseButton from "../../atoms/close-button/CloseButton";
import { CheckoutHeaderProps } from './CheckoutHeader.d'
import './CheckoutHeader.scss'

export default function CheckoutHeader ({ children, onClose }: CheckoutHeaderProps) {
  return (
    <section id="checkout-header">
      <h3 className="checkout-header-title">
        { children }
      </h3>

      <CloseButton
        onClick={onClose}
      />
    </section>
  )
}
