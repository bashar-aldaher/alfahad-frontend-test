import { jsx as _jsx } from "react/jsx-runtime";
import DynamicCard from "../../../dynamic-card";
import CustomSlider from "../../../common/custom-slider";
import { Styles } from "./styles";
import DynamicCardLoader from "../../../dynamic-card/DynamicCardLoader";
import React from "react";
const AdsSlider = ({ data, isLoading }) => {
    return (_jsx(Styles, { children: _jsx(CustomSlider, { slides: isLoading
                ? new Array(3).fill("")
                : data?.map((item, idx) => {
                    if (idx < 10)
                        return { data: item };
                }), SlideContentComponent: isLoading ? DynamicCardLoader : DynamicCard, slidesPerViewObj: {
                mobile: 1,
                tablet: 2,
                desktop: 3,
            }, type: "ad" }) }));
};
export default React.memo(AdsSlider);
