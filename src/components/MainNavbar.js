import { Button, Container, Navbar, Modal } from "react-bootstrap";

import "./mainNavbar.css";

const MainNavbar = () => {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">Let's Shopping</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
