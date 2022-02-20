import { Link } from 'react-router-dom'
import AppButton from '../../atoms/app-button/AppButton'
import {PageMessageProps } from './PageMessage.d'
import './PageMessage.scss'

export default function PageMessage ({ image, message }: PageMessageProps) {
  return (
    <div id="page-message">
      { image && <img src={image} alt={message.toLocaleLowerCase()} /> }
      <p className="message">
        { message }
      </p>
      <Link to="/pizzas">
        <AppButton small>
          Find A pizza
        </AppButton>
      </Link>
    </div>
  )
}
