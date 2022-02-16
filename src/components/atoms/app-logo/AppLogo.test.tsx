import { fireEvent, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import AppLogo from "./AppLogo"

test("Did Site Logo Render", async () => {
  const { findByTestId } = render(
    <BrowserRouter>
      <AppLogo />
    </BrowserRouter>
  );
  const appLogo = await findByTestId("app-logo");
  expect(appLogo).toBeInTheDocument
})
