import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('selects to reserve', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const logo = screen.getByAltText("Little Lemon Logo")
  expect(logo).toBeInTheDocument()
  
});

