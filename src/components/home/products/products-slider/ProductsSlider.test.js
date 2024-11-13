import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProductsSlider from "./index";
import { BrowserRouter } from "react-router-dom"; // <-- Add this import
// Mock DynamicCardLoader to make it render with data-testid
jest.mock("../../../dynamic-card/DynamicCardLoader", () => ({
    __esModule: true,
    default: () => _jsx("div", { "data-testid": "dynamic-card-loader", children: "Loading..." }),
}));
describe("ProductsSlider", () => {
    test("displays loading placeholders when loading", () => {
        render(_jsxs(BrowserRouter, { children: ["  ", _jsx(ProductsSlider, { data: [], isLoading: true })] }));
        expect(screen.getAllByTestId("dynamic-card-loader").length).toBeGreaterThan(0);
    });
    test("displays product cards when data is available", async () => {
        const mockData = [
            { id: 1, name: "Product 1", description: "Description 1" },
            { id: 2, name: "Product 2", description: "Description 2" },
        ];
        render(_jsxs(BrowserRouter, { children: ["  ", _jsx(ProductsSlider, { data: mockData, isLoading: false })] }));
        // Wait for the products to be rendered
        await waitFor(() => {
            expect(screen.getByText("Product 1")).toBeInTheDocument();
            expect(screen.getByText("Product 2")).toBeInTheDocument();
        });
    });
});
