import ICCloseBold from '../../../assets/icons/ic-close-bold.svg'
import { CloseButtonProps } from './CloseButton.d'
import './CloseButton.scss'

export default function CloseButton ({ onClick }: CloseButtonProps) {
  return (
    <div id="close-button" className="" onClick={onClick}>
      <img src={ICCloseBold} alt="close" />
    </div>
  )
}