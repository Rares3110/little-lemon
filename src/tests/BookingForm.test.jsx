import { screen, render } from "@testing-library/react";
import { expect, test } from "vitest";
import BookingMain from "../components/BookingPage/BookingMain";
import { fireEvent } from "@testing-library/react";

test('Renders the BookingForm label', () => {
    render(<BookingMain/>);
    const label = screen.getByText("Choose date");
    expect(label).toBeInTheDocument();
})

test('Change time in the BookingForm', () => {
    const { container } = render(<BookingMain/>);
    const timeSelect = container.querySelector("select#res-time");
    fireEvent.change(timeSelect, { target: { value: "19:00" } });
    expect(timeSelect).toHaveValue("19:00");
})