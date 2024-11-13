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
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: PathConstants.Home,
          element: <Home />,
        },
        {
          path: PathConstants.Ads,
          element: <Ads />,
        },
        {
          path: PathConstants.Products,
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
