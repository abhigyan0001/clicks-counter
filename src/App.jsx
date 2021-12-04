import "./App.css";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    if (theme === "dark") {
      document.body.style.backgroundColor = "#3e4954";
      document.body.style.color = "white";
    } else if (theme === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  });

  if (loading === true) {
    return (
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Navbar />
          <Loader />
          <Footer />
        </ThemeContext.Provider>
      </Router>
    );
  } else {
    return (
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Navbar />
        </ThemeContext.Provider>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Home />
              </ThemeContext.Provider>
            }
          />
          <Route
            path="/test"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Test />
              </ThemeContext.Provider>
            }
          />
        </Routes>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Footer />
        </ThemeContext.Provider>
      </Router>
    );
  }
}

export default App;
