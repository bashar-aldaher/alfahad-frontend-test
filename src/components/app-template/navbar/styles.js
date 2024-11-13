import styled from "styled-components";
import { devicesBreakpoints } from "../../../constants/breakpoints";
export const Styles = styled.div `
  position: absolute;
  width: 75%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ffffff40;
  margin-top: 20px;
  border-radius: 10px;
  z-index: 1;
  color: #fff;
  .navbar {
    padding-inline: 40px;
    padding-block: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.active {
      background: #000000ff;
    }
    .navbar-toggler {
      color: #fff !important;
      border: none !important;
      box-shadow: none !important;
    }
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }
    .navbar-nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .tabs {
        display: flex;
        gap: 15px;
        margin-inline-end: 50px;
        .hover-link {
          color: #ffffff80;
        }
      }
      .login {
        position: absolute;
        right: 0;
      }
      @media ${devicesBreakpoints.portable} {
        .tabs {
          margin-inline-end: 0px;
          flex-direction: column;
          gap: 40px;
          margin-bottom: 30px;
          .hover-link {
            text-align: center;
          }
        }
        .login {
          position: relative;
        }
      }
    }
  }
  .logo {
    font-weight: 700;
    font-size: 1.2rem;
    width: 50px;
  }
`;
