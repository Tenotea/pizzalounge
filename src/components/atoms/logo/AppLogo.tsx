import { Link } from "react-router-dom";
import IMLogo from '../../../assets/images/site-logo.png'
import './AppLogo.scss'

export default function AppLogo () {
  return (
    <Link to="/">
      <img src={IMLogo} alt="pizza lounge" id="app-logo" data-testid="app-logo" />
    </Link>
  )
}
