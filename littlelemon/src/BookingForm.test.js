import { render, screen } from "@testing-library/react";
import ResForm from './BookingForm';

test('check for date label', () => {
    render(<ResForm />);
    const dateLabel = screen.getByTestId("dateLabel");
    expect(dateLabel).toBeInTheDocument();
})

test('checks for resButton', () => {
    render(<ResForm />);
    const btn = screen.getByTestId("resButton");
    expect(resButton).toBeInTheDocument();
})