import React, { useContext } from "react";
import "../styles/App.css";
import { ImUser } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Form,
  Nav,
  NavDropdown,
  Image,
  Button,
} from "react-bootstrap";
import SearchContext from "./Context/SearchContext";

function AirNavBar() {
  const navigate = useNavigate();
  const { userName, isLoggedin, setIsLoggedin, setTo, setFrom } =
    useContext(SearchContext);
  return (
    <>
      <Navbar
        className="airNav"
        bg="light"
        expand="lg"
        style={{ backgroundColor: "#2f2f8d !important" }}
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              setTo("");
              setFrom("");
              navigate("/");
            }}
          >
            <Image
              src="	https://www.airbus.com/themes/custom/airbus_brand/logo.svg
"
              height="30px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="text-light"
                onClick={() => {
                  navigate("/SearchFlight");
                }}
              >
                <h6
                  className="b bg p-sm-2"
                  style={{ backgroundColor: "black", borderRadius: "20px" }}
                >
                  {" "}
                  Flights
                </h6>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className="flex-col">
                <Button variant="outline-success">
                  <ImUser
                    className="text-warning"
                    onClick={() => {
                      isLoggedin ? setIsLoggedin(false) : navigate("/Login");
                    }}
                  />
                </Button>
                <h6 className="text-light">
                  {isLoggedin ? userName : "Login"}
                </h6>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AirNavBar;
