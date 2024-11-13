import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppTemplate from "../../components/app-template";
import DynamicBanner from "../../components/common/dynamic-banner";
const Products = () => {
    return (_jsxs(AppTemplate, { pageTitle: "Products", navbar: true, footer: true, children: [_jsx(DynamicBanner, {}), _jsx("h1", { className: "text-center", children: "Products" })] }));
};
export default Products;
