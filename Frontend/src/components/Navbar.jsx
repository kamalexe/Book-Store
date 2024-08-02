import { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider.jsx";
import Logout from "../components/Logout";
import CartModal from "../components/CartModal"; // Import the CartModal

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart modal visibility

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    // Update the document title with the user's name
    if (authUser && authUser.user) {
      document.title = `Welcome, ${authUser.user.fullName}`;
    } else {
      document.title = "Welcome Guest";
    }
  }, [authUser]);

  useEffect(() => {
    // Apply the theme on initial load and whenever the theme changes
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark"); // Also apply to the body
      localStorage.setItem("theme", "dark"); // Store the theme preference
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Add theme to the dependency array

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  const [searchInput, setSearchInput] = useState(""); // Initialize search input state

  // Handle input change
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value); // Update state on input change
  };
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div>
      <div
        className={`z-40 max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 text-slate-800 bg-white dark:bg-slate-900 dark:text-white ${
          sticky
            ? "sticky-navbar shadow-md bg-base-100 duration-300 transition-all ease-in-out"
            : "bg-base-100"
        } `}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {" "}
                {navItems}{" "}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">BookStore</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="hidden md:block">
              <label className="input px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none"
                  placeholder="Search"
                  value={searchInput} // Set the value of the input
                  onChange={handleSearchChange} // Handle input change
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {authUser ? (
              <Logout />
            ) : (
              <div>
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_5").showModal();
                  }}
                >
                  Login
                </a>
                <Login></Login>
              </div>
            )}
          </div>
          <button
            className="btn btn-ghost relative"
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="1em"
              height="2em"
              viewBox="0 0 1200 1200"
            >
              <path
                fill="currentColor"
                d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M297.583 253.491l106.787 33.545c14.137 4.643 23.553 17.771 25.195 31.201l6.006 58.812l483.545 53.979c20.763 4.022 35.353 22.769 32.446 42.041l-30.029 169.188c-3.822 17.697-18.479 29.828-34.79 30.029H457.178l-8.423 47.974h407.959c21.332.751 36.957 16.995 37.207 35.962c-.885 21.638-18.325 35.801-37.207 36.035H405.542c-22.756-1.882-39.462-19.915-35.962-41.968l19.189-105.615l-30.029-295.236l-82.764-26.366c-9.6-3.2-16.806-9.219-21.606-18.019c-9.082-19.032-.599-40.104 15.601-49.219c9.246-4.806 18.276-5.405 27.612-2.343m162.598 559.497c31.066 0 56.25 25.184 56.25 56.25c0 31.065-25.184 56.25-56.25 56.25c-31.064 0-56.25-25.185-56.25-56.25c0-31.066 25.184-56.25 56.25-56.25m330.175 0c31.065 0 56.25 25.184 56.25 56.25c0 31.065-25.185 56.25-56.25 56.25s-56.25-25.185-56.25-56.25c0-31.066 25.185-56.25 56.25-56.25"
              />
            </svg>
          </button>
          <CartModal
            isOpen={isCartOpen}
            closeModal={() => setIsCartOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
