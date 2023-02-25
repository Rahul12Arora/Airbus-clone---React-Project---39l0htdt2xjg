import React, { useContext, useEffect } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import SearchContext from "./Context/SearchContext";
import Flight from "./Flight";

function Home() {
  const { Flights, setFlights, from, to, isLoader, setIsLoader } =
    useContext(SearchContext);
  async function getFlights() {
    setIsLoader(true);
    if (!to || !from) {
      const res = await fetch(
        `https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights`
      );
      const result = await res.json();
      setFlights(JSON.parse(JSON.stringify(result)));
      setIsLoader(false);
    } else {
      const res = await fetch(
        `https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${from}&to=${to}`
      );
      const result = await res.json();

      setFlights(JSON.parse(JSON.stringify(result)));
      setIsLoader(false);
      console.log("flight is", result);
    }
  }

  useEffect(() => {
    getFlights();
  }, []);
  if (isLoader) {
    return (
      <Spinner
        animation="border"
        variant="danger"
        className="align-self-center"
        style={{
          flex: 1,
          marginTop: 240,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    );
  }

  return (
    <div className=" bg-light w-100  m-1 " style={{ height: 100 + "vh" }}>
      <div
        id="imagecontainer"
        className="w-100 justify-content-center flex-col "
      >
        <h2 className="align-self-center">Flights</h2>
        <div className="flex-col justify-content-center ">
          {Flights.map((flight) => {
            return <Flight flight={flight} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
