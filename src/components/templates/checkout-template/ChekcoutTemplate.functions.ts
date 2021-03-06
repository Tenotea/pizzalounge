import { BillingInformation } from "../../../types/BillingInformation";

export function changeCheckoutStep ( currentCheckoutStep: number, setCurrentCheckoutStep: (step: number) => void ) {
  setCurrentCheckoutStep(currentCheckoutStep < 3  ? currentCheckoutStep + 1 : currentCheckoutStep)
}

export function changeCheckoutStepBackwards ( currentCheckoutStep: number, setCurrentCheckoutStep: (step: number) => void ) {
  setCurrentCheckoutStep(currentCheckoutStep > 0  ? currentCheckoutStep - 1 : currentCheckoutStep)
}

export function handleSubmitBillingInformation (currentCheckoutStep: number, billingInformation: BillingInformation, setCurrentCheckoutStep: (step: number) => void, setBillingInformation: (info: BillingInformation) => void ) {
  changeCheckoutStep(currentCheckoutStep, setCurrentCheckoutStep)
  setBillingInformation(billingInformation)
}
