import { ComponentMeta } from "@storybook/react";
import CloseButton from "./CloseButton";

export default {
  title: 'Close Button',
  component: CloseButton
} as ComponentMeta<typeof CloseButton>

export const Default = () => {
  return (
    <CloseButton 
      onClick={() => {}}
    />
  )
}
