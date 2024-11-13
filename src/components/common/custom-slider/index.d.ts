import { FC } from "react";
interface SlidesPerViewObj {
    mobile: number;
    tablet: number;
    desktop: number;
}
interface CustomSliderProps {
    slides: any[];
    SlideContentComponent: FC<{
        data: any;
        type?: string;
    }>;
    slidesPerViewObj?: SlidesPerViewObj;
    withPagination?: boolean;
    withNavigation?: boolean;
    withAutoPlay?: boolean;
    withLoop?: boolean;
    nextBtn?: string | null;
    previousBtn?: string | null;
    type?: string;
}
declare const CustomSlider: FC<CustomSliderProps>;
export default CustomSlider;
