import { screen, render } from "@testing-library/react";
import { expect, test } from "vitest";
import BookingForm from '../components/BookingPage/BookingForm';
import { defaultInfo, availableTimes } from "../components/BookingPage/BookingMain";

test('Renders the BookingForm labels', () => {
    render(<BookingForm info={defaultInfo} setInfo={() => {}} availableTimes={availableTimes} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
})