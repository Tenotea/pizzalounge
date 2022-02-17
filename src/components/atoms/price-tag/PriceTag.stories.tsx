import { ComponentMeta } from "@storybook/react";
import PriceTag from "./PriceTag";

export default {
  title: 'Price Tag',
  component: PriceTag
} as ComponentMeta<typeof PriceTag>

export const Default = () => {
  return (
    <PriceTag
      price={10}
    />
  )
}
