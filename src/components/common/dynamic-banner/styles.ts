import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/breakpoints";
export const Styles = styled.div`
  position: relative;
  height: 650px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    90deg,
    #111111 1.49%,
    rgba(17, 17, 17, 0.7) 114.58%
  );
  .bg-img {
    position: absolute;
    z-index: -2;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .bg-shape {
    position: absolute;
    right: 0;
    width: 60%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  header {
    width: 100%;
  }
  .title {
    color: var(--main-color);
    font-weight: 700;
    font-size: 3rem;
  }
  .description {
    color: #fff;
    font-weight: 400;
    font-size: 1.3rem;
    width: 50%;
    margin-bottom: 20px;
  }
  @media ${devicesBreakpoints.portable} {
    height: fit-content;
    padding-block: 100px;
    text-align: center;
    .description{
      width: 100%;
    }
  }
`;
