import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Dashboard";
import { dashboardData } from "../public/assets/data";
import { navList } from "../public/assets/data";
import Project from "./pages/Project";

const App = () => {
  return (
    <main className="main-body-container">
      <Router>
        <Navbar itemsArray={navList.itemsArray} />
        <section className="pt-12 pb-4 px-10">
          <Routes>
            <Route
              path="/"
              element={<Home itemsArray={dashboardData.itemsArray} />}
            />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </section>
      </Router>
    </main>
  );
};

export default App;
