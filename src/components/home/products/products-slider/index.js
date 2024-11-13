import { jsx as _jsx } from "react/jsx-runtime";
import DynamicCard from "../../../dynamic-card";
import CustomSlider from "../../../common/custom-slider";
import { Styles } from "./styles";
import DynamicCardLoader from "../../../dynamic-card/DynamicCardLoader";
import { memo } from "react";
const ProductsSlider = ({ data, isLoading }) => {
    return (_jsx(Styles, { children: _jsx(CustomSlider, { slides: isLoading
                ? new Array(3).fill("")
                : data?.map((item) => ({ data: item })), SlideContentComponent: isLoading ? DynamicCardLoader : DynamicCard, slidesPerViewObj: {
                mobile: 1,
                tablet: 2,
                desktop: 3,
            }, type: "product" }) }));
};
export default memo(ProductsSlider);
