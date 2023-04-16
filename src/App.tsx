import React, { createContext, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./Components/FontAwesomeIcons";
import Room from "./Pages/Room";


/** PAGES **/


interface IThemeContext {
  theme: any;
  method: any;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: null,
  method: null,
});

function App() {
  document.title = "GWC"

  //Set light mode or dark mode
  const [theme, setTheme] = useState("dark");
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    toggleTheme();
  }, [isChecked]);

  return (
    <ThemeContext.Provider value={{ theme: theme, method: toggleTheme }}>
      <div className="App" id={theme}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Room/>}
            />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
