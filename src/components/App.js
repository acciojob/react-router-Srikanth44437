import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="./home" component={Home} />
      <Route path="./about" component={About} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
