import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('check for load', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const logo = screen.getByAltText("Little Lemon Logo")
  expect(logo).toBeInTheDocument()
  
});

test('selects a pic in the lower section', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const chefPic = screen.getByAltText("chef with food")
  expect(chefPic).toBeInTheDocument()
  
});