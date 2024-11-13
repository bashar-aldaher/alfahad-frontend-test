import styled from "styled-components";

export const Styles = styled.div`
  .main-data {
    position: relative;
  }
  .chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }
  .chat-icon {
    width: fit-content;
    border-radius: 100%;
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main-color);
    cursor: pointer;
    box-shadow: #161616 0px 2px 10px 0px;
    transition: all.3s;
    &:hover {
      opacity: 0.7;
    }
  }
`;
