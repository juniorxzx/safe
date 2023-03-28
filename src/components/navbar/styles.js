import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 5rem;
  position: fixed;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 20%;
  svg {
    color: white;
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  ul {
    display: flex;
    width: 100%;
    justify-content: center;

    li {
      margin-right: 2rem;
    }
  }
`;

export const Redirect = styled.div`
  border: 1px solid;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  a {
    
  }
`;
