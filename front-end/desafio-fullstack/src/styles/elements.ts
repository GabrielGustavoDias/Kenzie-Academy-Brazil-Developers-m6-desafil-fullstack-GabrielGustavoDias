import styled from "styled-components";

export const FieldSet = styled.fieldset`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  input {
    width: 80%;
    border: 1px solid transparent;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px 20px;
  }

  &&:focus {
    outline: 1px solid black;
  }
  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FieldSetPassword = styled.fieldset`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  input {
    width: 40%;
    border: 1px solid transparent;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px 20px;
  }

  &&:focus {
    outline: 1px solid black;
  }
  button {
    padding: 0;
    width: 10%;
    border: none;
    border-radius: 0;
    padding: 0;
  }
`;
