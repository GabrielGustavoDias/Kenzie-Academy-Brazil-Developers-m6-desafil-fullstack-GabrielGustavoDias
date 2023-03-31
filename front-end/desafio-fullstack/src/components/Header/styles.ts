import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 10%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

  nav {
    display: flex;
    width: 100%;
  }

  a {
    font-size: 20px;
  }
  ul {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
  }
  li {
    color: var(--color-primary);
    line-height: 40px;
  }
`;
