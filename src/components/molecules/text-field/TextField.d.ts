export type TextFieldProps = {
  label: string
  name: string
  pattern: string
  error: string
  required?:boolean
  value: string
  onUpdate: (value: string) => void
}
