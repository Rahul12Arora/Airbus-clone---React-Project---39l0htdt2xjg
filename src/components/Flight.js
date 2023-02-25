import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { MdOutlineFlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CheckOut from "./CheckOut";
import SearchContext from "./Context/SearchContext";

function Flight({ flight }) {
  const getArrivalTime = (departureDate, departureTime, duration) => {
    departureTime =
      departureTime.substr(0, departureTime.length - 2) +
      " " +
      departureTime.substr(departureTime.length - 2);
    const departureDateObj = new Date(departureDate + " " + departureTime);
    const hoursAndMinutes = duration.split(" ");
    const durationHours = parseInt(hoursAndMinutes[0].match(/(\d+)/)[0]);
    const durationMinutes = parseInt(hoursAndMinutes[1].match(/(\d+)/)[0]);

    const arrivalDateObj = new Date(
      departureDateObj.getTime() +
        durationHours * 60 * 60 * 1000 +
        durationMinutes * 60 * 1000
    );

    return {
      date: arrivalDateObj.getDate(),
      hours: arrivalDateObj.getHours(),
      minutes: arrivalDateObj.getMinutes(),
    };
  };
  const { from, to } = useContext(SearchContext);
  const navigate = useNavigate();
  const str = flight.airlineName;
  console.log(str);
  const { CompanyLogo } = useContext(SearchContext);
  const arrivalTime = getArrivalTime(
    flight.departure.departureDate,
    flight.departure.departureTime,
    flight.duration
  );
  console.log("time is", arrivalTime);
  return (
    <>
      <Card
        className="  card d-flex m-4 m-lg-auto mb-lg-4"
        style={{ width: "70%", backgroundColor: "white" }}
      >
        <Card.Body className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <Card.Img
              className="d-flex align-self-center card-img d-flex"
              src={CompanyLogo[str]}
              style={{ height: "50px", width: "50px" }}
            ></Card.Img>
            <h5 className="align-self-xl-center m-2">{str}</h5>
          </div>
          <div className=" m-l-4 m-l-4 mx-md-auto align-self-xl-center">
            <h4>{flight.from}</h4>
            <h5>{flight.departure.departureDate}</h5>
            <h6>{flight.departure.departureTime}</h6>
          </div>
          <div className="m-4 m-l-4 mx-md-auto align-self-xl-center">
            <h3 align="center">{flight.duration}</h3>
            <h6 className="ms-3 m-lg-0">
              {flight.via[0] ? "via-" + flight.via[0] : "nonstop"}
            </h6>
          </div>
          <div className="m-l-4 m-l-4 mx-md-auto align-self-xl-center">
            <h4>{flight.to}</h4>
            <h5>{flight.departure.departureDate}</h5>
            <h6>{flight.departure.departureTime}</h6>
          </div>
          <div className="m-4 m-l-4 mx-md-auto d-flex align-self-xl-center">
            <h3 align="center">{flight.price}</h3>
            <h5 className="m-lg-2">Rs</h5>
          </div>
          <div className="m-l-4 m-l-4 mx-md-auto align-self-xl-center">
            {" "}
            <Button
              variant="dark"
              onClick={() => {
                // <CheckOut flight={flight} />;
                navigate("/CheckOut", { state: { flight: flight } });
              }}
            >
              Book
            </Button>
          </div>
        </Card.Body>
      </Card>
      {!from || !to ? (
        <Card
          className="  card d-flex m-4 m-lg-auto mb-lg-4"
          style={{ width: "70%" }}
        >
          <Card.Body className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <Card.Img
                className="d-flex align-self-center card-img d-flex"
                src={CompanyLogo[str]}
                style={{ height: "50px", width: "50px" }}
              ></Card.Img>
              <h5 className=" align-self-xl-center m-2">{str}</h5>
            </div>
            <div className=" m-l-4 m-l-4 mx-md-auto align-self-xl-center">
              <h4>{flight.to}</h4>
              <h5>{flight.return.returnDate}</h5>
              <h6>{flight.return.returnTime}</h6>
            </div>
            <div className="m-4 m-l-4 mx-md-auto align-self-xl-center">
              <h3 align="center">{flight.duration}</h3>
              <h6 className="ms-3 m-lg-0">
                {flight.via[0] ? "via-" + flight.via[0] : "nonstop"}
              </h6>
            </div>
            <div className="m-l-4 m-l-4 mx-md-auto align-self-xl-center">
              <h4>{flight.from}</h4>
              <h5>{flight.return.returnDate}</h5>
              <h6>{flight.return.returnTime}</h6>
            </div>
            <div className="m-4 m-l-4 mx-md-auto d-flex justify-content-center ">
              <h3 align="center">{flight.price}</h3>
              <h5 className="m-lg-2">Rs</h5>
            </div>
            <div className="m-l-4 m-l-4 mx-md-auto align-self-xl-center">
              {" "}
              <Button
                variant="dark"
                onClick={() => {
                  <CheckOut flight={flight} />;
                  navigate("/CheckOut", { state: { flight: flight } });
                }}
              >
                Book
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}

export default Flight;
