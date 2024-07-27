// Import React Router and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";

function App() {
  return (
    <div className="text-slate-800 bg-white dark:bg-slate-900 dark:text-white">
      <Router>
        <Routes>
          {/* Define routes with correct JSX syntax */}
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
