import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  font: 400 14px Roboto, sans-serif;
  background: #f0f0f5;
  -webkit-font-smoothing: antialiased;
}

input, button, textarea{
  font: 400 18px Roboto, sans-serif;
}

button{
  cursor: pointer;
}

form input {
  width: 100%;
  height: 50px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}
textarea.has-error, input.has-error{
  border: 1px solid #e02041;
}
form textarea {
  width: 100%;
  min-height: 140px;
  height: 50px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
}

.button{
  width: ${props => (props.width ? props.width : "100%")};
  height: 50px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 50px;
  transition: background 0.2s;
  &:hover{
    background: ${darken(0.05, "#e02041")}
  }
}

`;
