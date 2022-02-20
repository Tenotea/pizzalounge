import TextField from '../../molecules/text-field/TextField'
import './BillingInformationForm.scss'
import { BillingInformationFormProps } from './BillingInformationForm.d'
import { handleSubmitBillingInformation, initialComponentState, reducerFunction } from './BillingInformationForm.functions'
import { useReducer } from 'react'
import AppButton from '../../atoms/app-button/AppButton'

export default function BillingInformationForm({ onSubmit, existingFormData }: BillingInformationFormProps) {
  const [formData, updateFormData] = useReducer(reducerFunction, existingFormData || initialComponentState)

  return (
    <form
      id="billing-information-form"
      onSubmit={(event) => handleSubmitBillingInformation(formData, onSubmit, event)}
    >
      <TextField
        name="fname"
        label="First Name"
        value={formData.firstname}
        pattern='^\w{3,}'
        required
        error="Please enter a valid name"
        onUpdate={value => updateFormData({ field: 'firstname', value })}
      />

      <TextField
        name="lname"
        label="Last Name"
        value={formData.lastname}
        pattern="^\w{3,}"
        required
        error="Please enter a valid name"
        onUpdate={value => updateFormData({ field: 'lastname', value })}
      />

      <TextField
        name="email"
        label="Email Address"
        value={formData.email}
        pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
        required
        error="Please enter a valid email address"
        onUpdate={value => updateFormData({ field: 'email', value })}
      />

      <TextField
        name="address"
        label="Street Address"
        value={formData.address}
        pattern="^[#.0-9a-zA-Z\s,-]+$"
        required
        error="Please enter a valid street address"
        onUpdate={value => updateFormData({ field: 'address', value })}
      />


      <div>
        <h6 className="form-section">
          Credit Card Information
        </h6>

        <TextField
          name='cardnumber'
          label="Card Number"
          value={formData.card.number}
          pattern="^\w{3,}"
          required
          error="Please enter a valid card number"
          onUpdate={value => updateFormData({ field: 'card', value: { ...formData.card, number: value } })}
        />
        <div className="fields-grid">
          <TextField
            name='cc-exp'
            label="Expiry Date"
            value={formData.card.expiry}
            pattern="^([0-9]{2})/([0-9]{2})"
            required
            error="Please enter your card expiration date. In the format (MM/YY)"
            onUpdate={value => updateFormData({ field: 'card', value: { ...formData.card, expiry: value } })}
          />
          <TextField
            name="cvc"
            label="CVV"
            value={formData.card.cvv}
            pattern="^\w{3}"
            required
            error="Please enter a valid CVV (usually 3 digits at the back fo your credit card)"
            onUpdate={value => updateFormData({ field: 'card', value: { ...formData.card, cvv: value } })}
          />
        </div>
      </div>

      <AppButton expand>
        Save Billing Information
      </AppButton>
    </form>
  )
}