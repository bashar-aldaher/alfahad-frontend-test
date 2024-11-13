import DynamicCard from "../../../dynamic-card";
import CustomSlider from "../../../common/custom-slider";
import { Styles } from "./styles";
import DynamicCardLoader from "../../../dynamic-card/DynamicCardLoader";
import React from "react";

interface AdsSliderProps {
  data: any;
  isLoading: boolean;
}

const AdsSlider: React.FC<AdsSliderProps> = ({ data, isLoading }) => {
  return (
    <Styles>
      <CustomSlider
        slides={
          isLoading
            ? new Array(3).fill("")
            : data?.map((item: any, idx: number) => {
                if (idx < 10) return { data: item };
              })
        }
        SlideContentComponent={isLoading ? DynamicCardLoader : DynamicCard}
        slidesPerViewObj={{
          mobile: 1,
          tablet: 2,
          desktop: 3,
        }}
        type="ad"
      />
    </Styles>
  );
};

export default React.memo(AdsSlider);
