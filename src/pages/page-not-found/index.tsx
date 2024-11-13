import AppTemplate from "../../components/app-template";
import DynamicBanner from "../../components/common/dynamic-banner";

const PageNotFound = () => {
  return (
    <AppTemplate pageTitle={"page not found"} navbar={true} footer={true}>
      <DynamicBanner />
      <h1 className="text-center">page not found</h1>
    </AppTemplate>
  );
};

export default PageNotFound;
