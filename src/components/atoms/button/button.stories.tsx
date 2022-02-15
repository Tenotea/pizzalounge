import React from 'react';
import Button from "./Button"
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = () => {
  return (
    <Button>
      Default Button
    </Button>
  )
}
