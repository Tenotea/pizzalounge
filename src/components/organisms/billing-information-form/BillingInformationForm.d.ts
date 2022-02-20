import {BillingInformation } from '../../../types/BillingInformation'

export type BillingInformationFormProps = {
  onSubmit: (formData: BillingInformation) => void;
  existingFormData?:BillingInformation
}

export type BillingInformationReducerActionParams = {
  field: string,
  value: any
}
