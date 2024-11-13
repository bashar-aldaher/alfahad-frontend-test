import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/breakpoints";
export const Styles = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    width: 1px !important;
    background-size: 1%;
    display: none;
  }
  .button-area {
    display: flex;
    justify-content: space-between;
    /* min-height: 3vh; */
  }

  .swiper-button {
    display: flex;
    position: relative;
    top: calc(50% - 12px);
    z-index: 1000;
    cursor: pointer;
  }
  .swiper-button svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--main-blue);
  }
  .swiper-slide {
    padding: 2rem 0 4rem 0;
  }
  .prev-btn {
    left: -40px;
    top: 230px;
    @media ${devicesBreakpoints.tablet} {
      left: -20px;
    }
  }
  .next-btn {
    right: -40px;
    top: 230px;
    @media ${devicesBreakpoints.tablet} {
      right: -20px;
    }
  }
  .swiper-button-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .hide {
    display: none;
  }
`;
