import React from "react";
import { Form, Button } from "react-bootstrap";
import { useRef, useContext } from "react";
import SearchContext from "./Context/SearchContext";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

function SignUp() {
  const userN = useRef();
  const pass = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    userName,
    password,
    setUserName,
    setPassword,
    setIsLoggedin,
    isLoggedin,
  } = useContext(SearchContext);

  function setUserDetails(userName, password) {
    let users = JSON.parse(localStorage.getItem("users"));
    const checkData = users.filter((user) => {
      return user.userName === userName;
    });
    if (checkData[0] && checkData[0].userName === userName) {
      toast.error("user already exist");
    } else {
      const obj = {
        userName: userName,
        password: password,
      };

      users.push(obj);
      localStorage.setItem("users", JSON.stringify(users));

      setIsLoggedin(true);
      navigate("/CheckOut", {
        state: { flight: location.state.flight },
      });
    }
  }

  const validateUser = () => {
    if (!userName || !password) {
      toast.error("enter valid details");
    } else {
      setUserDetails(userName, password);
      setIsLoggedin(true);
    }
  };
  return (
    <div
      style={{ backgroundColor: "silver", height: "100vh" }}
      className="m mark w-100"
    >
      <div
        className="align-self-ceneter  container w-50"
        style={{ marginTop: "100px" }}
      >
        <h2 className="text-center">Registration</h2>
        <div className="align-items-center border d-flex flex-column">
          <Form.Control
            size="md"
            type="text"
            placeholder="Username"
            className="bg form-control form-control-md"
            ref={userN}
            value={userName}
            onChange={() => {
              setUserName(userN.current.value);
            }}
          />
          <Form.Control
            size="md"
            type="password"
            placeholder="enter password"
            className="bg form-control form-control-md"
            ref={pass}
            value={password}
            onChange={() => {
              setPassword(pass.current.value);
            }}
          />

          <Button
            variant="light"
            className="m-3"
            onClick={() => {
              validateUser();
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
