import { ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import AppLogo from "./AppLogo";


export default {
  title: 'App Logo',
  component: AppLogo
} as ComponentMeta<typeof AppLogo>

export const Default = () => {
  return (
    <BrowserRouter>
      <AppLogo />
    </BrowserRouter>
  )
}
