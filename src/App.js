import React from "react";
import { BrowserRouter, Routes, Route, Switch, Navigate } from "react-router-dom";
import Home from "./Pages/HomePage/index"
import About from "./Pages/AboutPage/index"
import Service from "./Pages/ServicePage/index"
import Contact from "./Pages/ContactPage/index"
import Planner from "./Pages/PlannerPage/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Navigate to='/home' />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/services' exact element={<Service />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/planners' exact element={<Planner />} />
        <Route path='*' exact element={<div style={{ textAlign: "center", width: "100%", fontSize: "3rem" }}> 404 Not Found</div>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
