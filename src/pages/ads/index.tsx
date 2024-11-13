import DynamicBanner from "../../components/common/dynamic-banner";
import AppTemplate from "../../components/app-template";

const Ads = () => {
  return (
    <AppTemplate pageTitle={"Ads"} navbar={true} footer={true}>
      <DynamicBanner />
      <h1 className="text-center">Ads</h1>
    </AppTemplate>
  );
};

export default Ads;
