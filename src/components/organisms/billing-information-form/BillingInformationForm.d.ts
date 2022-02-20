import {BillingInformation } from '../../../types/BillingInformation'

export type BillingInformationFormProps = {
  onSubmit: (formData: BillingInformation) => void
}

export type BillingInformationReducerActionParams = {
  field: string,
  value: any
}
