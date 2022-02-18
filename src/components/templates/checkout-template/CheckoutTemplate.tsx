import CheckoutHeader from "../../organisms/checkout-header/CheckoutHeader";
import { CheckoutTemplateProps } from './CheckoutTemplate.d'

export default function CheckoutTemplate ({onClose}: CheckoutTemplateProps) {
  return (
    <section>
      <CheckoutHeader
        onClose={onClose}
      >
        My Cart
      </CheckoutHeader>
    </section>
  )
}
