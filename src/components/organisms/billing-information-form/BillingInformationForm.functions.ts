import { FormEvent, Reducer } from "react";
import { BillingInformation } from "../../../types/BillingInformation";
import { BillingInformationReducerActionParams } from "./BillingInformationForm.d";

export function handleSubmitBillingInformation (
  formData: BillingInformation, 
  updateFunction:  (formData: BillingInformation) => void,
  event: FormEvent
  ) {
    event.preventDefault()
    updateFunction(formData)
}

export const initialComponentState: BillingInformation = {
  firstname: '',
  card: {
    cvv: '',
    expiry: '',
    number: ''
  },
  address: '',
  lastname: '',
  email: ''
}

export const reducerFunction: Reducer<BillingInformation, BillingInformationReducerActionParams> = (state, action) => {
  const newState = {...state} as Record<string, any>
  newState[action.field] = action.value
  return newState as BillingInformation
}
