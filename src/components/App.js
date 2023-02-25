import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AirNavBar from "./AirNavBar";
import Home from "./Home";
import SearchContext from "./Context/SearchContext";
import { useMediaQuery } from "react-responsive";
import SearchFlight from "./SearchFlight";
import CheckOut from "./CheckOut";
import Login from "./Login";
import SignUp from "./SignUp";

// Components

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Flights, setFlights] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [searchArray, setSearchArray] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [CompanyLogo, setCompanyLogo] = useState({
    Vistara:
      "http://www.bangaloreaviation.com/wp-content/uploads/2014/08/Vistara-Logo.jpg",
    Indigo:
      "http://www.contactnumbers.in/wp-content/uploads/2015/04/IndiGo_airlines_Logo2.jpg",
    Spicejet:
      "http://4.bp.blogspot.com/-6YOY3SMN7kI/TwPF5jQYJqI/AAAAAAAAEAs/fR3TcoJHvzk/s1600/spicejet_logo.png",
    "Air India":
      "https://i.pinimg.com/originals/5f/9b/e5/5f9be5876eda5d373d7f91a8faf5e659.jpg",
    "Air Asia": "http://logonoid.com/images/air-asia-logo.png",
    "Go Air":
      "https://www.airlineratings.com/wp-content/uploads/uploads/GoAir_Logo.jpg",
  });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 720px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1300px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1800px)",
  });
  const users = [];
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  return (
    <>
      <div id="main">
        <SearchContext.Provider
          value={{
            from: from,
            to: to,
            setFrom: setFrom,
            setTo: setTo,
            userName: userName,
            password: password,
            setUserName: setUserName,
            setPassword: setPassword,
            Flights: Flights,
            setFlights: setFlights,
            CompanyLogo: CompanyLogo,
            isLoader: isLoader,
            setIsLoader: setIsLoader,
            searchArray: searchArray,
            setSearchArray: setSearchArray,
            setIsLoggedin: setIsLoggedin,
            isLoggedin: isLoggedin,
          }}
        >
          <Router>
            <Toaster />
            <AirNavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SearchFlight" element={<SearchFlight />} />
              <Route path="/CheckOut" element={<CheckOut />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </Router>
        </SearchContext.Provider>
      </div>
    </>
  );
}
export default App;

//

//   return (
//     <div id="main">
//       <SearchContext.Provider
//         value={{
//           from: from,
//           to: to,
//         }}
//       >
//         <Router>
//           <AirNavBar />
//           <Toaster />
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </Router>
//       </SearchContext.Provider>
//     </div>
//   );
// };

// export default App;
