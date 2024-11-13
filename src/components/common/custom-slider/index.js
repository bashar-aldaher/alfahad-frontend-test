import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Styles } from "./styles";
import { Container } from "react-bootstrap";
const CustomSlider = ({ slides, SlideContentComponent, slidesPerViewObj, withPagination = false, withNavigation = false, withAutoPlay = false, withLoop = false, nextBtn = null, previousBtn = null, type, }) => {
    return (_jsxs(Styles, { children: [withNavigation && (_jsx(Container, { className: "button-area-container", children: _jsxs("div", { className: "button-area", children: [_jsx("div", { className: `swiper-button prev-btn ${previousBtn ? previousBtn : "prev-slide-component"}`, children: _jsx(IoIosArrowRoundBack, {}) }), _jsx("div", { className: `swiper-button next-btn ${nextBtn ? nextBtn : "next-slide-component"}`, children: _jsx(IoIosArrowRoundForward, {}) })] }) })), _jsx(Swiper, { navigation: withNavigation && nextBtn && previousBtn
                    ? {
                        nextEl: `.${nextBtn}`,
                        prevEl: `.${previousBtn}`,
                        disabledClass: "swiper-button-disabled",
                    }
                    : {
                        nextEl: `.next-slide-component`,
                        prevEl: `.prev-slide-component`,
                        disabledClass: "swiper-button-disabled",
                    }, pagination: withPagination
                    ? {
                        clickable: true,
                    }
                    : false, modules: [Autoplay, Navigation, Pagination], autoplay: withAutoPlay && {
                    delay: 2500,
                    disableOnInteraction: true,
                }, loop: withLoop && true, centeredSlides: false, centerInsufficientSlides: true, spaceBetween: 120, breakpoints: {
                    640: {
                        slidesPerView: slidesPerViewObj ? slidesPerViewObj?.mobile : 1,
                    },
                    768: {
                        slidesPerView: slidesPerViewObj ? slidesPerViewObj?.tablet : 2,
                    },
                    1200: {
                        slidesPerView: slidesPerViewObj ? slidesPerViewObj?.desktop : 3,
                    },
                }, children: slides?.map((item, index) => (_jsx(SwiperSlide, { children: _jsx(SlideContentComponent, { data: item, type: type }) }, index))) })] }));
};
export default CustomSlider;
