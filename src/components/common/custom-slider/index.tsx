import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Styles } from "./styles";
import { Container } from "react-bootstrap";
import { FC } from "react";

interface SlidesPerViewObj {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface CustomSliderProps {
  slides: any[];
  SlideContentComponent: FC<{ data: any; type?: string }>;
  slidesPerViewObj?: SlidesPerViewObj;
  withPagination?: boolean;
  withNavigation?: boolean;
  withAutoPlay?: boolean;
  withLoop?: boolean;
  nextBtn?: string | null;
  previousBtn?: string | null;
  type?: string;
}

const CustomSlider: FC<CustomSliderProps> = ({
  slides,
  SlideContentComponent,
  slidesPerViewObj,
  withPagination = false,
  withNavigation = false,
  withAutoPlay = false,
  withLoop = false,
  nextBtn = null,
  previousBtn = null,
  type,
}) => {
  return (
    <Styles>
      {withNavigation && (
        <Container className="button-area-container">
          <div className="button-area">
            <div
              className={`swiper-button prev-btn ${
                previousBtn ? previousBtn : "prev-slide-component"
              }`}
            >
              <IoIosArrowRoundBack />
            </div>

            <div
              className={`swiper-button next-btn ${
                nextBtn ? nextBtn : "next-slide-component"
              }`}
            >
              <IoIosArrowRoundForward />
            </div>
          </div>
        </Container>
      )}
      <Swiper
        navigation={
          withNavigation && nextBtn && previousBtn
            ? {
                nextEl: `.${nextBtn}`,
                prevEl: `.${previousBtn}`,
                disabledClass: "swiper-button-disabled",
              }
            : {
                nextEl: `.next-slide-component`,
                prevEl: `.prev-slide-component`,
                disabledClass: "swiper-button-disabled",
              }
        }
        pagination={
          withPagination
            ? {
                clickable: true,
              }
            : false
        }
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={
          withAutoPlay && {
            delay: 2500,
            disableOnInteraction: true,
          }
        }
        loop={withLoop && true}
        centeredSlides={false}
        centerInsufficientSlides={true}
        spaceBetween={120}
        breakpoints={{
          640: {
            slidesPerView: slidesPerViewObj ? slidesPerViewObj?.mobile : 1,
          },
          768: {
            slidesPerView: slidesPerViewObj ? slidesPerViewObj?.tablet : 2,
          },
          1200: {
            slidesPerView: slidesPerViewObj ? slidesPerViewObj?.desktop : 3,
          },
        }}
      >
        {slides?.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideContentComponent data={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles>
  );
};

export default CustomSlider;
