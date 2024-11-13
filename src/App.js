import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppProvider from "./components/app-provider";
import PageNotFound from "./pages/page-not-found";
import PathConstants from "./routes/pathConstants";
import Layout from "./components/layout";
const Home = lazy(() => import("./pages/home"));
const Ads = lazy(() => import("./pages/ads"));
const Products = lazy(() => import("./pages/products"));
const App = () => {
    const router = createBrowserRouter([
        {
            element: _jsx(Layout, {}),
            errorElement: _jsx(PageNotFound, {}),
            children: [
                {
                    path: PathConstants.Home,
                    element: _jsx(Home, {}),
                },
                {
                    path: PathConstants.Ads,
                    element: _jsx(Ads, {}),
                },
                {
                    path: PathConstants.Products,
                    element: _jsx(Products, {}),
                },
            ],
        },
    ]);
    return (_jsx(AppProvider, { children: _jsx(RouterProvider, { router: router }) }));
};
export default App;
