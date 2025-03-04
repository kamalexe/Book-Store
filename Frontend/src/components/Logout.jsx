import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({ ...setAuthUser, user: null });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (e) {
      toast.error("Couldn't log out" + e.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
