import { Link } from "react-router-dom";
import IMLogo from '../../../assets/images/logo.svg'

export default function AppLogo () {
  return (
    <Link to="/">
      <img src={IMLogo} alt="pizza lounge" />
    </Link>
  )
}
