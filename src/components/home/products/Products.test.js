import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../../store/slices/productSlice";
import Products from "./index";
import '@testing-library/jest-dom';
// Mock DynamicCardLoader to render with data-testid
jest.mock("../../dynamic-card/DynamicCardLoader", () => ({
    __esModule: true,
    default: () => _jsx("div", { "data-testid": "loading-spinner", children: "Loading..." }),
}));
const mockStore = configureStore({
    reducer: {
        product: productReducer,
    },
});
describe("Products", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("renders loading spinner initially", () => {
        render(_jsx(Provider, { store: mockStore, children: _jsx(Products, {}) }));
        // Wait for and assert that the loading spinner is rendered with the correct data-testid
        const spinners = screen.getAllByTestId("loading-spinner");
        expect(spinners.length).toBe(3); // Make sure only one spinner is rendered
    });
});
