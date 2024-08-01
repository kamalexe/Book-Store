import React, { useState } from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const [showLogin, setShowLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.fullName);
    const useInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", useInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Success");
        }
        localStorage.setItem("Users", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response) {
          alert("ERROR:" + err.response.data.error);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center text-slate-800 bg-white dark:bg-slate-900 dark:text-white">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h3 className="font-bold text-lg">Sign up!</h3>

            <div className="space-y-4 mt-10">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M628.736 528.896A416 416 0 0 1 928 928H96a415.87 415.87 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0a208 208 0 0 1 416 0" />
                </svg>
                <input
                  {...register("fullName", { required: true })}
                  type="text"
                  className="grow"
                  placeholder="Name"
                />
              </label>
              {errors.fullName && (
                <span className="text-xs text-red-500">Name is required</span>
              )}

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  className="grow"
                  placeholder="Email"
                />
              </label>

              {errors.email && (
                <span className="text-xs text-red-500">Email is required</span>
              )}
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="grow"
                  placeholder="Password"
                />
              </label>
              {errors.password && (
                <span className="text-xs text-red-500">
                  Password is required
                </span>
              )}
            </div>
            <div className="modal-action">
              <div className="flex">
                <div className="w-1/2">
                  <p>Already registered?</p>
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </button>
                </div>
                <div className="flex w-1/2">
                  <button className="btn btn-secondary" type="submit">
                    Register
                  </button>
                  <div className="space-x-4">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => closeModal()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Signup;
