import React from "react";
import { Form, Button } from "react-bootstrap";
import { useRef, useContext } from "react";
import SearchContext from "./Context/SearchContext";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  let users = [];
  const userN = useRef();
  const pass = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { userName, password, setUserName, setPassword, setIsLoggedin } =
    useContext(SearchContext);

  function Checkuser(userName, password) {
    const arr = users.filter((user) => {
      return user.userName === userName && user.password === password;
    });
    if (arr.length === 0) {
      return false;
    }
    return true;
  }

  const validateUser = () => {
    users = JSON.parse(localStorage.getItem("users"));
    if (!userName || !password) {
      toast.error("enter valid details");
    } else {
      if (Checkuser(userName, password)) {
        toast.success("successfully logged in");
        setIsLoggedin(true);
        if (location.state) {
          navigate("/CheckOut", {
            state: {
              flight: location.state.flight,
            },
          });
        } else {
          navigate("/");
        }
      } else {
        toast.error("not a user");
      }
    }
  };

  return (
    <div
      style={{ backgroundColor: "silver", height: "100vh" }}
      className="m mark w-100"
    >
      <div
        className="align-self-ceneter shadow-lg  container w-50"
        style={{ marginTop: "100px" }}
      >
        <h2 className="text-center">Login</h2>
        <div className="align-items-center  d-flex flex-column">
          <Form.Control
            size="md"
            type="text"
            placeholder="Username"
            className="bg form-control form-control-md m-2"
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
          <div className="d-flex">
            <Button variant="light" className="m-3" onClick={validateUser}>
              Login
            </Button>{" "}
            <Button
              variant="light"
              className="m-3"
              onClick={() => {
                console.log("hello");
                if (location.state) {
                  navigate("/SignUp", {
                    state: { flight: location.state.flight },
                  });
                } else {
                  navigate("/SignUp");
                }
              }}
            >
              SignUp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
