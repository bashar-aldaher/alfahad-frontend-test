import AppTemplate from "../../components/app-template";
import DynamicBanner from "../../components/common/dynamic-banner";

const Products = () => {
  return (
    <AppTemplate pageTitle={"Products"} navbar={true} footer={true}>
      <DynamicBanner />
      <h1 className="text-center">Products</h1>
    </AppTemplate>
  );
};

export default Products;
