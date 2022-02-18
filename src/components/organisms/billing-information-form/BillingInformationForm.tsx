import TextField from '../../molecules/text-field/TextField'
import './BillingInformationForm.scss'

export default function BillingInformationForm() {
  return (
    <section id="billing-information-form">
      <TextField
        name="fname"
        label="First Name"
      />
      <TextField
        name="lname"
        label="Last Name"
      />
      <TextField
        name="email"
        label="Email Address"
      />
      <TextField
        name="address"
        label="Street Address"
      />


      <div>
        <h6 className="form-section">
          Credit Card Information
        </h6>

        <TextField
          name='credit-card'
          label="Card Number"
        />
        <div className="fields-grid">
          <TextField
            name='expiry-date'
            label="Expiry Date"
          />
          <TextField
            name="cvv"
            label="CVV"
          />
        </div>
      </div>
    </section>
  )
}