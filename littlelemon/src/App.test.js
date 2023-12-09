import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('checks for heading', () => {
  render(<App />);

  const heading = screen.getByTestId("title");
  expect(heading).toHaveTextContext("Little Lemon");  
  
});

test('selects to reserve', () => {

  const heading = screen.getByTestId("title")
  expect(heading).toHaveTextContext("Little Lemon");  
  
  const btn = screen.getByTestId("resButton")

  fireEvent.click(btn)

  const resTitle = screen.getByTestId("resTitle")

  expect(resTitle).toHaveTextContext("Reservations");
});
