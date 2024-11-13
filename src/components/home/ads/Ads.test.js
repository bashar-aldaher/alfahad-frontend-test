import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import adReducer from "../../../store/slices/adSlice"; // Assume this is where the ads reducer is located
import Ads from "./index"; // Import the Ads component
import "@testing-library/jest-dom";
// Mock DynamicCardLoader to render with data-testid
jest.mock("../../dynamic-card/DynamicCardLoader", () => ({
    __esModule: true,
    default: () => _jsx("div", { "data-testid": "loading-spinner", children: "Loading..." }),
}));
const mockStore = configureStore({
    reducer: {
        ad: adReducer,
    },
});
describe("Ads", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("renders loading spinner initially", () => {
        render(_jsx(Provider, { store: mockStore, children: _jsx(Ads, {}) }));
        const spinners = screen.getAllByTestId("loading-spinner");
        expect(spinners.length).toBe(3); // Check that at least one loading spinner is found
    });
});
