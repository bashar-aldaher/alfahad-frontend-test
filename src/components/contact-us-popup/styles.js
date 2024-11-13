import styled from "styled-components";
import { devicesBreakpoints } from "../../constants/breakpoints";
export const Styles = styled.div `
  width: 450px;
  height: 500px;
  border-radius: 15px;
  z-index: 100;
  display: block;
  position: relative;
  box-shadow: #161616 0px 2px 10px 0px;
  background: var(--secondary-color);
  @media ${devicesBreakpoints.tablet} {
    width: calc(100dvw - 40px);
  }
  @media (max-height: 650px) {
    height: calc(90dvh - 120px);
  }
  &::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    bottom: -10px;
    right: 27.5px;
    transform: rotate(45deg);
    background: var(--secondary-color);
    z-index: -1;
  }
  .header {
    padding-top: 10px;
    padding-inline: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 90%;
      height: 1px;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      background: #ffffff40;
    }
    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      .avatar {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .user-data {
        .name {
          font-weight: 600;
        }
        .status {
          display: flex;
          align-items: center;
          gap: 5px;
          .status-point {
            width: 7px;
            height: 7px;
            border-radius: 100%;
            background-color: green;
          }
        }
      }
    }
    .close {
      all: unset;
      font-size: 25px;
      cursor: pointer;
    }
  }
  .messages {
    height: calc(100% - 170px);
    margin: 15px;
    margin-bottom: 5px;
    border-radius: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    gap: 10px;
    padding-inline: 10px;
    padding-block: 10px;
    background: #111111;
    font-size: 0.9rem;
    .message-container {
      width: 90%;
      padding: 10px;
      padding-bottom: 20px;
      display: flex;
      align-items: flex-end;
      gap: 10px;
      .details {
        display: flex;
        gap: 5px;
        color: #161616dd;
      }
      .user {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 100%;
        margin-bottom: -15px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .data {
        width: calc(100% - 70px);
        border-radius: 30px;
        padding: 10px;
      }
    }
    .incoming-message {
      align-self: flex-end;
      flex-direction: row-reverse;
      color: #fff;
      .data {
        background: #222222;
        border-end-end-radius: 0;
      }
    }
    .outcoming-message {
      align-self: flex-start;
      border-end-start-radius: 0;
      .data {
        background: linear-gradient(90deg, #865bce 0%, #682ad0 100%);
        color: #fff;
        border-end-start-radius: 0;
      }
    }
  }
  .footer {
    padding-inline: 10px;
    padding-top: 10px;
    border-top: 1px solid #16161620;
    form {
      display: flex;
      gap: 10px;
      align-items: center;
      .form-control {
        width: calc(100% - 48px);
        border: 1px solid #ffffff40 !important;
        box-shadow: none !important;
        outline: none !important;
        border-radius: 10px;
        background: transparent;
        color: #fff;
        &::placeholder {
          color: #fff;
        }
      }
    }
    .send {
      all: unset;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: var(--main-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      cursor: pointer;
    }
  }
`;
