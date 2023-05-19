import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./Components/FontAwesomeIcons";

/** PAGES **/
import Room from "./Pages/Room";
import AboutMe from "./Pages/AboutMe";
import Vizathon from "./Pages/Vizathon";
import SustainathonPH from "./Pages/SustainathonPH";
import SustainathonASEAN from "./Pages/SustainathonASEAN";
import Works from "./Pages/Works";
import Loader from "./Components/Loader/Loader";


function App() {
  const [isPageReady, setIsPageReady] = useState<boolean>(false);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(() => {
        setIsPageReady(true);
      }, 1000);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
        onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
      <div className="App">
        {isPageReady ? (
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Room/>}
              />
              <Route
                path="/aboutMe"
                element={<AboutMe/>}
              />
              <Route
                path="/aboutMe/Vizathon2021"
                element={<Vizathon/>}
              />
              <Route
                path="/aboutMe/SustainathonPH21"
                element={<SustainathonPH/>}
              />
              <Route
                path="/aboutMe/SustainathonASEAN21"
                element={<SustainathonASEAN/>}
              />
              <Route
                path="/works"
                element={<Works/>}
              />
            </Routes>
          </Router>
        ) : (
          <Loader/>
        )}
      </div>
  );
}

export default App;
