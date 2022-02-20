import { ComponentMeta } from "@storybook/react";
import PizzaSizeSelector from "./PizzaSizeSelector";

export default {
  title: 'Pizza Size Selector',
  component: PizzaSizeSelector
} as ComponentMeta<typeof PizzaSizeSelector>

const variations = [
  { id: 'small', name: 'Small', price: 10 },
  // { id: 'medium', name: 'Medium', price: 20 },
  { id: 'large', name: 'Large', price: 30 },
]

export const Default = () => {
  return (
    <PizzaSizeSelector 
      activeVariation={variations[0]}
      onVariationChange={() => {}}
      variations={variations}
    />
  )
}
