// Import React Router and components
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("AUTH USER in Navbar --", authUser);
  return (
    <div className="text-slate-800 bg-white dark:bg-slate-900 dark:text-white">
      <Router>
        <Routes>
          {/* Define routes with correct JSX syntax */}
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
