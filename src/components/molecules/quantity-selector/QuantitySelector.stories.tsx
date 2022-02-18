import { ComponentMeta } from "@storybook/react";
import QuantitySelector from "./QuantitySelector";

export default {
  title: 'Quantity Selector',
  component: QuantitySelector
} as ComponentMeta<typeof QuantitySelector>

export const Default = () => {
  return (
    <QuantitySelector 
      quantity={1}
    />
  )
}
