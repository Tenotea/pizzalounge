import { ComponentMeta } from "@storybook/react";
import QuantitySelector from "./PizzaQuantitySelector";

export default {
  title: 'Pizza Quantity Selector',
  component: QuantitySelector
} as ComponentMeta<typeof QuantitySelector>

export const Default = () => {
  return (
    <QuantitySelector
      onQuantityChange={() => {}}
      quantity={1}
    />
  )
}
