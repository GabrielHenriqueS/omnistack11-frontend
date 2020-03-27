import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 840px) {
    flex-direction: column;
    padding: 10px;
  }

  > section {
    width: 100%;
    max-width: 380px;
    >img{

    @media (max-width: 840px) {
        width: 90px;  
      }
    }
    > h1 {
      margin: 64px 0 32px;
      font-size: 32px;
      @media (max-width: 840px) {
        font-size: 20px;
        margin: 32px 0 16px;
      }
    }

    > p {
      font-size: 18px;
      @media (max-width: 840px) {
        font-size: 15px;
        line-height: 15px;
      }
      color: #737380;
      line-height: 32px;
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
      @media (max-width: 840px) {
        margin-top: 20px;
      }
      &:hover {
        opacity: 0.8;
      }
      > svg {
        margin-right: 8px;
      }
    }
  }

  > form {
    width: 100%;
    max-width: 450px;
    input, textarea {
      margin-top: 8px;
    }
  }
`;
