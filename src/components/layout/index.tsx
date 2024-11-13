import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import MainLoader from "../common/main-loader";

const Layout = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
