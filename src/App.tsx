import AppButton from "./components/atoms/button/AppButton";
import AppLogo from "./components/atoms/logo/AppLogo";
import ICPizzaForButtonFilled from './assets/icons/ic-pizza-for-button-filled.svg'

export default function App() {
  return (
    <main id="app-body">
      <AppLogo />
      <AppButton icon={ICPizzaForButtonFilled}>
        Place Order
      </AppButton>
    </main>
  );
}
