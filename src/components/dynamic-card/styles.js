import styled from "styled-components";
export const Styles = styled.div `
  height: 390px;
  border-radius: 12px;
  background: #161616;
  overflow: hidden;
  transition: all.3s;
  width: 100%;
  .img-container {
    background: var(--main-color);
    height: 190px;
    &.skeleton {
      background: transparent;
      margin-top: -4px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .data {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 20px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.6rem;
      font-weight: 700;
      &.skeleton {
        display: block;
      }
      .link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 100%;
        border: 1px solid #fff;
        transition: all.3s;
      }
    }
    .description,
    .category {
      font-weight: 500;
      font-size: 1.2rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      &.product-description {
        -webkit-line-clamp: 1;
      }
    }
    .category {
      -webkit-line-clamp: 1;
    }
  }
  &:hover {
    box-shadow: #161616 0px 2px 10px 0px;
    .link {
      background: #fff;
      color: var(--secondary-color);
    }
  }
`;
