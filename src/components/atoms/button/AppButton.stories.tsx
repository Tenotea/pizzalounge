import AppButton from "./AppButton"
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'App Button',
  component: AppButton
} as ComponentMeta<typeof AppButton>

export const Default: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton>
      Default Button
    </AppButton>
  )
}
