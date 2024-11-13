import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import AdsSlider from "./index";
import { BrowserRouter } from "react-router-dom"; // Wrap with BrowserRouter as links are used

// Mock DynamicCardLoader to render with data-testid
jest.mock("../../../dynamic-card/DynamicCardLoader.tsx", () => ({
  __esModule: true,
  default: () => <div data-testid="dynamic-card-loader">Loading...</div>,
}));

describe("AdsSlider", () => {
  test("displays loading placeholders when loading", () => {
    render(
      <BrowserRouter>
        <AdsSlider data={[]} isLoading={true} />
      </BrowserRouter>
    );
    expect(screen.getAllByTestId("dynamic-card-loader").length).toBeGreaterThan(0);
  });

  test("displays ad cards when data is available", async () => {
    const mockData = [
      { id: 1, title: "Ad 1", content: "Ad Content 1", image: "ad1.jpg", link: "/ad/1" },
      { id: 2, title: "Ad 2", content: "Ad Content 2", image: "ad2.jpg", link: "/ad/2" },
    ];

    render(
      <BrowserRouter>
        <AdsSlider data={mockData} isLoading={false} />
      </BrowserRouter>
    );

    // Wait for the ads data to be rendered
    await waitFor(() => {
      expect(screen.getByText("Ad 1")).toBeInTheDocument();
      expect(screen.getByText("Ad 2")).toBeInTheDocument();
    });
  });
});
