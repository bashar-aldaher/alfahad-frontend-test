import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import AdsSlider from "./index";
import { BrowserRouter } from "react-router-dom"; // Wrap with BrowserRouter as links are used
// Mock DynamicCardLoader to render with data-testid
jest.mock("../../../dynamic-card/DynamicCardLoader.tsx", () => ({
    __esModule: true,
    default: () => _jsx("div", { "data-testid": "dynamic-card-loader", children: "Loading..." }),
}));
describe("AdsSlider", () => {
    test("displays loading placeholders when loading", () => {
        render(_jsx(BrowserRouter, { children: _jsx(AdsSlider, { data: [], isLoading: true }) }));
        expect(screen.getAllByTestId("dynamic-card-loader").length).toBeGreaterThan(0);
    });
    test("displays ad cards when data is available", async () => {
        const mockData = [
            { id: 1, title: "Ad 1", content: "Ad Content 1", image: "ad1.jpg", link: "/ad/1" },
            { id: 2, title: "Ad 2", content: "Ad Content 2", image: "ad2.jpg", link: "/ad/2" },
        ];
        render(_jsx(BrowserRouter, { children: _jsx(AdsSlider, { data: mockData, isLoading: false }) }));
        // Wait for the ads data to be rendered
        await waitFor(() => {
            expect(screen.getByText("Ad 1")).toBeInTheDocument();
            expect(screen.getByText("Ad 2")).toBeInTheDocument();
        });
    });
});
