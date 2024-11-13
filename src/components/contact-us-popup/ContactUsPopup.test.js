import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUsPopup from "./index";
import '@testing-library/jest-dom';
describe("ContactUsPopup", () => {
    const setIsOpen = jest.fn();
    beforeEach(() => {
        setIsOpen.mockClear();
    });
    test("renders the ContactUsPopup component correctly", () => {
        render(_jsx(ContactUsPopup, { setIsOpen: setIsOpen }));
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Type a message")).toBeInTheDocument();
    });
    test("displays incoming and outgoing messages", () => {
        render(_jsx(ContactUsPopup, { setIsOpen: setIsOpen }));
        const messages = screen.getAllByText(/Lorem ipsum dolor sit/);
        expect(messages.length).toBeGreaterThan(0);
        expect(messages[0]).toBeInTheDocument();
    });
    test("closes the popup when close button is clicked", () => {
        render(_jsx(ContactUsPopup, { setIsOpen: setIsOpen }));
        const closeButton = screen.getByLabelText("Close chat popup");
        fireEvent.click(closeButton);
        expect(setIsOpen).toHaveBeenCalledWith(false);
    });
    test("sends a message when the send button is clicked", () => {
        render(_jsx(ContactUsPopup, { setIsOpen: setIsOpen }));
        const input = screen.getByPlaceholderText("Type a message");
        const sendButton = screen.getByLabelText("Send message");
        fireEvent.change(input, { target: { value: "Hello!" } });
        fireEvent.click(sendButton);
        expect(input).toHaveValue("");
        // Optionally add a check for the mock function or component behavior on message send
    });
    test("displays the avatar image for each message", () => {
        render(_jsx(ContactUsPopup, { setIsOpen: setIsOpen }));
        const avatars = screen.getAllByAltText("username");
        expect(avatars.length).toBeGreaterThan(0);
    });
});
