import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
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
      .post("http://localhost:4001/user/login", useInfo)
      .then((res) => {
        if (res.data) {
          document.getElementById("my_modal_5").close();
          toast.success("Successfully Login!");
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data));
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("ERROR: " + err.response.data.error);
        }
      });
  };
  return (
    <div className="text-slate-800 bg-white dark:bg-slate-900 dark:text-white">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="space-y-4"
          >
            <h3 className="font-bold text-lg">Login!</h3>
            <div className="space-y-4 mt-10">
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
                  <p>Not registered?</p>
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>
                </div>
                <div className="flex w-1/2">
                  <button type="submit" className="btn btn-secondary">
                    Login
                  </button>

                  <div className="space-x-4">
                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_5").close()
                      }
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
