import AppButton from "./AppButton"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ICPizzaForButton from '../../../assets/icons/ic-pizza-for-button-filled.svg'

export default {
  title: 'App Button',
  component: AppButton
} as ComponentMeta<typeof AppButton>

export const Default: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton>
      App Button
    </AppButton>
  )
}

export const DefaultSmall = () => {
  return (
    <AppButton small> App Button </AppButton>
  )
}

export const WithIcon: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton icon={ICPizzaForButton}>
      App Button
    </AppButton>
  )
}

export const SmallWithIcon: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton small icon={ICPizzaForButton}>
      App Button
    </AppButton>
  )
}

export const WithIconAndRightToLeftOrientation: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton icon={ICPizzaForButton} rtl>
      App Button
    </AppButton>
  )
}

export const DisabledWithIcon: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton icon={ICPizzaForButton} disabled>
      App Button
    </AppButton>
  )
}

export const ExpandedWithIcon: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton icon={ICPizzaForButton} expand>
      App Button
    </AppButton>
  )
}

export const WithIconOnly: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton icon={ICPizzaForButton} >{''}</AppButton>
  )
}

export const SmallWithIconOnly: ComponentStory<typeof AppButton> = () => {
  return (
    <AppButton icon={ICPizzaForButton} small>{''}</AppButton>
  )
}

