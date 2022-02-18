import { TextFieldProps } from './TextField.d'

import './TextField.scss'

export default function TextField ({ label, error }: TextFieldProps) {
  return (
    <div id="text-field">
      <div className='field-container'>
        <label htmlFor="" className='field-label'>
          { label }
        </label>
        <input type="text" className="text-box" />
      </div>
      { error && <p className='error-message'> Sample Error Message  </p> }
    </div>
  )
}
