import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

test("Check if Button is a part of the DOM", async () => {
  const onClickHandler = jest.fn()
  const { findByTestId } = render(
    (<Button onClick={onClickHandler}> 
      Click Me! 
    </Button>)
  );
  const btn = await findByTestId("button")
  fireEvent.click(btn)
  expect(onClickHandler).toHaveBeenCalled()
})
