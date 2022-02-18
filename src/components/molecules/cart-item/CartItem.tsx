import AppButton from '../../atoms/app-button/AppButton'
import PriceTag from '../../atoms/price-tag/PriceTag'
import PizzaQuantitySelector from '../pizza-quantity-selector/PizzaQuantitySelector'
import { CartItemProps } from './CartItem.d'
import ICTrashCan from '../../../assets/icons/ic-trash-can.svg'
import './CartItem.scss'

export default function CartItem ({ pizza }: CartItemProps) {
  return (
    <div id='cart-item'>
      <div className="cart-item-image-container">
        <img src={pizza.image} className="cart-item-image" alt={pizza.title.toLocaleLowerCase()} />
      </div>
      <div className="cart-item-data">
        <div className="cart-item-title-container">
          <h5 className='cart-item-title'> 
            { pizza.title }
          </h5>
          <PizzaQuantitySelector 
            quantity={1}
          />
        </div>
        <div className="cart-item-action-container">
          <PriceTag price={10} tiny />
          <AppButton icon={ICTrashCan} disabled tiny>{''}</AppButton>
        </div>
      </div>
    </div>
  )
}