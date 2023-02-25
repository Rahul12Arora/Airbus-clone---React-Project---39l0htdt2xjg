import React, { useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { BsArrowLeftRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SearchContext from "./Context/SearchContext";

function SearchFlight() {
  const { from, to, setTo, setFrom } = useContext(SearchContext);
  const source = useRef("");
  const destination = useRef("");
  const navigate = useNavigate();
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  const validateInput = () => {
    if (!to || !from) {
      toast.error("Not a valid input feild");
    }
    setFrom(capitalizeFirstLetter(from));
    setTo(capitalizeFirstLetter(to));
    console.log(from);

    navigate("/");
  };

  return (
    <div className=" bg-light w-100  m-1 " style={{ height: 100 + "vh" }}>
      <div id="imagecontainer" className="w-100 justify-content-center d-flex ">
        <div className="align-items-sm-center  align-self-md-center bg-light pb-lg-5  w-75">
          <h2 className="text-md-center">Search Flights</h2>
          <div className="align-items-sm-center bg-light align-self-md-center d-flex  h-50 w-100 p-4">
            <Form.Control
              size="md"
              type="text"
              placeholder="Source"
              className="bg form-control form-control-md"
              ref={source}
              value={from}
              onChange={() => {
                setFrom(source.current.value);
              }}
            />
            <Button variant="dark">
              <BsArrowLeftRight
                className="bg-darrk card text-bg-light"
                onClick={() => {
                  const swap = to;
                  setTo(from);
                  setFrom(swap);
                }}
              />
            </Button>
            <Form.Control
              size="md"
              type="text"
              className="bg form-control form-control-md"
              placeholder="Destination"
              ref={destination}
              value={to}
              onChange={() => {
                setTo(destination.current.value);
              }}
            />
            <Button variant="dark" onClick={validateInput}>
              Search
            </Button>
          </div>
          <div className="text-md-center">
            <h2>Experience Your Journry</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFlight;
