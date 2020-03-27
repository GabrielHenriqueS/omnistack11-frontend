import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    > img {
      width: 50%;
    }
  }
  @media (max-width: 810px) {
    > img {
      display: none;
    }
  }
  section {
    width: 100%;
    max-width: 350px;
    margin: 30px;
    > form {
      margin-top: 100px;
      > h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }
      > a {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        text-decoration: none;
        font-weight: 600;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.8;
        }
        > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;
