import { ComponentMeta } from "@storybook/react";
import TextField from "./TextField";

export default {
  title: 'Text Field',
  component: TextField
} as ComponentMeta<typeof TextField>

export const Default = () => {
  return (
    <p></p>
    // <TextField
    //   label="Text Field"
    //   name="field"
    // />
  )
}
