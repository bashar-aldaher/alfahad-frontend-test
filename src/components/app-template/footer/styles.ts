import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/breakpoints";
export const Styles = styled.div`
  background-color: #232323;
  color: #fff;
  .container {
    display: grid;
    grid-template-columns: 2fr 5fr;
    align-items: center;
    gap: 90px;
    .info {
      .logo {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 5px;
      }
      .description {
        font-size: 1rem;
        font-weight: 400;
        opacity: 70%;
      }
    }
    .data {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      .item {
        display: flex;
        flex-direction: column;
        .title {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 5px;
        }
        a {
          color: #fff;
          transition: all.3s;
          opacity: 70%;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          svg {
            color: var(--main-color);
            margin-inline-end: 5px;
          }
          &:hover {
            color: var(--main-color);
            opacity: 100%;
          }
        }
        .social-links {
          display: flex;
          gap: 15px;
          a {
            cursor: pointer;
            &:hover {
              opacity: 0.4;
            }
          }
        }
      }
    }
    @media (max-width: 1200px) {
      gap: 40px;
      grid-template-columns: 1fr;
    }
    @media ${devicesBreakpoints.tablet} {
      .info {
        text-align: center;
      }
      .data {
        grid-template-columns: 1fr 1fr;
        .item {
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
      }
    }
    @media ${devicesBreakpoints.mobile} {
      .data {
        grid-template-columns: 1fr;
      }
    }
  }
  .copyright {
    text-align: center;
    margin-top: 60px;
    padding-top: 20px;
    @media ${devicesBreakpoints.tablet} {
      margin-top: 40px;
    }
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 60%;
      height: 1px;
      background: #ffffff60;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
