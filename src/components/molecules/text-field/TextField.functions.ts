import { FormEvent } from "react"

export function validateFormField (ev: FormEvent, value: string, pattern: string, setError: (status: boolean) => void) {
  // ev.preventDefault()
  const regex = new RegExp(pattern)
  setError(!regex.test(value))
}

export function validateFormFieldOnBlur (ev: FormEvent, value: string, pattern: string, setError: (status: boolean) => void, updatePlaceHolderPosition: (status: boolean) => void) {
  validateFormField(ev, value, pattern, setError)
  updatePlaceHolderPosition(value.length > 0)
}

export function updateFieldValue (ev: FormEvent, pattern: string, setError: (status: boolean) => void, setFieldValue: (value: string) => void, updatePlaceHolderPosition: (value: boolean) => void) {
  const target = ev.target as HTMLInputElement
  validateFormFieldOnBlur(
    ev, target.value, pattern, setError, updatePlaceHolderPosition
  )
  setFieldValue(target.value)
}
