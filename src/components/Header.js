import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
import logo from "../img/ctct.png";

export default function Header() {
  return (
    <Navbar color="dark" dark>
      <img
        src={logo}
        width="100px"
        style={{ borderRadius: "100%" }}
        alt="User Icon"
      />
      <Container>
        <NavbarBrand href="/">Ghost Admin API testing CRUD</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add Post
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
