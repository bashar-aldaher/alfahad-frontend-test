import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppTemplate from '../../components/app-template';
import DynamicBanner from '../../components/common/dynamic-banner';
import Ads from '../../components/home/ads';
import Products from '../../components/home/products';
const Home = () => {
    return (_jsxs(AppTemplate, { pageTitle: "Home", navbar: true, footer: true, children: [_jsx(DynamicBanner, {}), _jsx(Ads, {}), _jsx(Products, {})] }));
};
export default Home;
