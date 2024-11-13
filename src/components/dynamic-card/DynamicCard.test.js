import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import DynamicCard from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom';
describe("DynamicCard", () => {
    test("displays product details", () => {
        const productData = {
            data: {
                id: 1,
                name: "Product 1",
                description: "Description 1",
                price: "$20",
                categories: { name: "Category 1", description: "Category Description" },
            },
        };
        render(_jsx(Router, { children: _jsx(DynamicCard, { data: productData, type: "product" }) }));
        screen.debug(); // To help debug the output if needed
        expect(screen.getByText("Product 1")).toBeInTheDocument();
        expect(screen.getByText("Description 1")).toBeInTheDocument();
        expect(screen.getByText("$20")).toBeInTheDocument();
        expect(screen.getByText(/Category 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Category Description/i)).toBeInTheDocument();
    });
    test("displays ad details", () => {
        const adData = {
            data: {
                id: 2,
                title: "Ad Title",
                content: "Ad Content",
            },
        };
        render(_jsx(Router, { children: _jsx(DynamicCard, { data: adData, type: "ad" }) }));
        expect(screen.getByText("Ad Title")).toBeInTheDocument();
        expect(screen.getByText("Ad Content")).toBeInTheDocument();
    });
});
