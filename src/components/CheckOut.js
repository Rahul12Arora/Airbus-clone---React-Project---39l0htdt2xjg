import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import SearchContext from "./Context/SearchContext";

function CheckOut({ flight }) {
  const navigate = useNavigate();
  const { isLoggedin } = useContext(SearchContext);
  const location = useLocation();
  console.log(location.state.flight);
  useEffect(() => {
    console.log("the value is ", isLoggedin);
    if (!isLoggedin) {
      navigate("/Login", { state: { flight: location.state.flight } });
    }
  }, [isLoggedin]);
  console.log("the value is ", isLoggedin);
  return (
    <div
      style={{ backgroundColor: "silver", height: "100vh" }}
      className="m mark w-100"
    >
      <div
        className="align-self-ceneter  container w-75"
        style={{ marginTop: "100px" }}
      >
        <h2 className="text-center">payment summary</h2>
        <div className="align-self-ceneter border flex-col table">
          <table className="table">
            <tr>
              <td>
                <h4>Base Fare</h4>
              </td>
              <td>
                <h4>{location.state.flight.price} rs</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Fee and Surcharge</h4>
              </td>
              <td>
                <h4>{(location.state.flight.price * 14) / 100} rs</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Total</h4>
              </td>
              <td>
                <h4>
                  {(location.state.flight.price * 14) / 100 +
                    Number(location.state.flight.price)}{" "}
                  rs
                </h4>
              </td>
            </tr>
          </table>
        </div>
        <Button variant="light" className="m-3" onClick={() => {}}>
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}

export default CheckOut;
