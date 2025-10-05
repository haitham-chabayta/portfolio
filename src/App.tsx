import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Dashboard";
import { dashboardData } from "../public/assets/data";
import { navList } from "../public/assets/data";
import Project from "./pages/Project";
import DIY from "./pages/DIY";
import Resume from "./pages/Resume";

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
            <Route path="/DIY" element={<DIY />} />
            <Route
              path="/Resume"
              element={
                <Resume width={700} file="/assets/documents/resume.pdf" />
              }
            />
          </Routes>
        </section>
      </Router>
    </main>
  );
};

export default App;
