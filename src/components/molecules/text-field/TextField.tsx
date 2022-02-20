import { useState } from 'react'
import { TextFieldProps } from './TextField.d'
import { updateFieldValue, validateFormField, validateFormFieldOnBlur } from './TextField.functions'

import './TextField.scss'

export default function TextField ({ label, error, name, pattern, required, value, onUpdate }: TextFieldProps) {
  const [ labelShouldExitPlaceholder, setLabelShouldExitPlaceholder ] = useState(false)
  const [fieldHasError, setFieldHasError] = useState(false)

  return (
    <div id="text-field">
      <div className='field-container'>
        <label htmlFor={name} className={`field-label ${labelShouldExitPlaceholder ? 'exit-placeholder' : ''}`}>
          { label }
        </label>
        <input
          type="text"
          id={name}
          className="text-box"
          value={value}
          pattern={pattern}
          required={required}
          onFocus={() => setLabelShouldExitPlaceholder(true)}
          onChange={(e) => updateFieldValue(e, pattern, setFieldHasError, onUpdate, setLabelShouldExitPlaceholder)}
          onBlur={(e) => validateFormFieldOnBlur(e, value, pattern, setFieldHasError, setLabelShouldExitPlaceholder)}
          onInvalid={(e) => validateFormField(e, value, pattern, setFieldHasError)}
        />
      </div>
      { fieldHasError && <p className='error-message'> { error } </p> }
    </div>
  )
}
