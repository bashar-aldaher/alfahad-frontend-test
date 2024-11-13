import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import MainLoader from "../common/main-loader";
const Layout = () => {
    return (_jsx(Suspense, { fallback: _jsx(MainLoader, {}), children: _jsx(Outlet, {}) }));
};
export default Layout;
