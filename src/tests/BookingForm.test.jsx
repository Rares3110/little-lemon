import { screen, render } from "@testing-library/react";
import { expect, test } from "vitest";
import BookingMain from "../components/BookingPage/BookingMain";
import { fireEvent } from "@testing-library/react";
import { vi } from "vitest";

const mockUseNavigate = vi.hoisted(() => vi.fn());
vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

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

test('Show alert in the BookingForm', () => {
    const { container, getByText } = render(<BookingMain/>);
    const guestsInput = container.querySelector("input#guests");
    const guestsWarning = getByText("Guests between 1 and 10!");
    expect(guestsWarning.style.visibility).toBe("hidden");
    fireEvent.change(guestsInput, { target: { value: 20 } });
    expect(guestsWarning.style.visibility).toBe("visible");
})