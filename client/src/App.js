import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Home from "./components/Home";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import "./app.css";

function App() {
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/upcoming").then((response) => {
  //     console.log("promise fulfilled");
  //     setUpcoming(response.data);
  //     setLoading(false);
  //   });
  // }, []);

  // console.log("render", upcoming, "movies");

  return (
    <Router>
      <Routes>
        {/* <Route
          exact
          path="/"
          render={() => {
            return <Navigate to="/home" />;
          }}
        /> */}
        <Route path="/" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
