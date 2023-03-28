import React from "react";
import { Container, Logo, Menu, Redirect } from "./styles";
import { ImIcoMoon } from "react-icons/im";
const Navbar = () => {
  return (
    <Container>
      <Logo>
        <ImIcoMoon />
        <h1>Eyes Oepn</h1>
      </Logo>
      <Menu>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About Us</a></li>
        </ul>
        <Redirect>
          <a href="" target="_blank">Contact</a>
        </Redirect>
      </Menu>
    </Container>
  );
};

export default Navbar;
