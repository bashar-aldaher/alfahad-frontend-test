import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/breakpoints";
export const Styles = styled.div`
  position: relative;
  background: var(--text-color);
  padding-top: 30px;
  .inner-section {
    padding-bottom: 0;
  }
  .section-bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 93%;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    @media ${devicesBreakpoints.portable} {
      img {
        object-fit: cover;
      }
    }
  }
`;
