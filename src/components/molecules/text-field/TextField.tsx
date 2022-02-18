import { useState } from 'react'
import { TextFieldProps } from './TextField.d'

import './TextField.scss'

export default function TextField ({ label, error, name }: TextFieldProps) {
  const [ labelShouldExitPlaceholder, setLabelShouldExitPlaceholder ] = useState(false)

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
          onFocus={() => setLabelShouldExitPlaceholder(true)} 
          onBlur={() => setLabelShouldExitPlaceholder(false)}
        />
      </div>
      { error && <p className='error-message'> Sample Error Message  </p> }
    </div>
  )
}
