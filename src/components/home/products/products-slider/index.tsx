import DynamicCard from "../../../dynamic-card";
import CustomSlider from "../../../common/custom-slider";
import { Styles } from "./styles";
import DynamicCardLoader from "../../../dynamic-card/DynamicCardLoader";
import { memo } from "react";

interface ProductsSliderProps {
  data: any;
  isLoading: boolean;
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ data, isLoading }) => {
  return (
    <Styles>
      <CustomSlider
        slides={
          isLoading
            ? new Array(3).fill("")
            : data?.map((item: any) => ({ data: item }))
        }
        SlideContentComponent={isLoading ? DynamicCardLoader : DynamicCard}
        slidesPerViewObj={{
          mobile: 1,
          tablet: 2,
          desktop: 3,
        }}
        type="product"
      />
    </Styles>
  );
};

export default memo(ProductsSlider);
