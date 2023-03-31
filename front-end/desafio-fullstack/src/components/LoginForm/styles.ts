import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px;
  box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 25%);
  border-radius: 28px;
  background-color: var(--color-secondary);
  width: 450px;
  z-index: 2;

  form:not(:focus) {
    @keyframes scaleup {
      from {
        scale: 0;
      }
      to {
        scale: 1;
      }
    }

    animation: scaleup 1s ease;
  }

  h1 {
    text-align: center;
  }
  hr {
    transform: translateY(20px);
  }
  span {
    text-align: center;
    background-color: white;
    width: 100px;
    z-index: 5;
    align-self: center;
    transform: translateY(-8px);
  }
  .button {
    width: 100%;
  }
`;
