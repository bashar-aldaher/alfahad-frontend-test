import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DynamicBanner from "../../components/common/dynamic-banner";
import AppTemplate from "../../components/app-template";
const Ads = () => {
    return (_jsxs(AppTemplate, { pageTitle: "Ads", navbar: true, footer: true, children: [_jsx(DynamicBanner, {}), _jsx("h1", { className: "text-center", children: "Ads" })] }));
};
export default Ads;
