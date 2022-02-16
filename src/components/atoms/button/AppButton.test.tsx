import { fireEvent, render } from '@testing-library/react';
import AppButton from './AppButton';

test("Check if Button is a part of the DOM", async () => {
  const onClickHandler = jest.fn()
  const { findByTestId } = render(
    <AppButton onClick={onClickHandler}> 
      Click Me! 
    </AppButton>
  );
  const btn = await findByTestId("app-button")
  fireEvent.click(btn)
  expect(onClickHandler).toHaveBeenCalled()
})
