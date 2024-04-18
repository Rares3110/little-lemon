import { screen, render } from "@testing-library/react";
import { expect, test } from "vitest";
import BookingForm from '../components/BookingPage/BookingForm';
import BookingMain from "../components/BookingPage/BookingMain";
import { defaultInfo, availableTimes } from "../components/BookingPage/BookingMain";
import { fireEvent } from "@testing-library/react";

test('Renders the BookingForm label', () => {
    render(<BookingForm info={defaultInfo} setInfo={() => {}} availableTimes={availableTimes} />);
    const label = screen.getByText("Choose date");
    expect(label).toBeInTheDocument();
})

test('Change time in the BookingForm', () => {
    const { container } = render(<BookingMain/>);
    const timeSelect = container.querySelector("select#res-time");
    fireEvent.change(timeSelect, { target: { value: availableTimes[2] } });
    expect(timeSelect).toHaveValue(availableTimes[2]);
})