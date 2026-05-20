// import React from 'react';

import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const Register = () => {
  const { RegisterUser, signInWithGoogle } = use(AuthContext);

  const handleRegisterWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const name = form.name.value;

    const userData = {
      name,
      email,
      photoURL,
    };

    console.log(email, password);
    RegisterUser(email, password)
      .then((res) => {
        console.log(res.user);

        return axios.post(
          "https://library-management-system-mu-lemon.vercel.appuser",
          userData,
        );
      })
      .then((res) => {
        console.log("User saved in DB:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <h1 className="text-5xl font-bold">Register Your Account</h1>

              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input"
                name="photoURL"
                placeholder="Enter your photo URL"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              <div className="divider">OR</div>

              <button
                onClick={handleRegisterWithGoogle}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
