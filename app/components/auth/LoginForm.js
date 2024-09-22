"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "@/app/context/AuthContext";

const LoginForm = () => {
  const { 
    registerUser, 
    loginUser, 
    googleLogin 
  } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-gray-900 bg-opacity-75">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-4 px-6 rounded-xl max-w-md w-full"
      >
        <h2>Login</h2>
        <div className="flex space-x-2 items-center">
          <input
            type="email"
            value={values.email}
            required
            placeholder="Email"
            className="p-2 rounded w-full border border-blue-100 block my-4"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex space-x-2 items-center">
          <input
            type="password"
            value={values.password}
            required
            placeholder="Password"
            className="p-2 rounded w-full border border-blue-100 block my-4"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <button
            className="bg-green-300 text-white px-10 py-4 rounded-md hover:opacity-75"
            onClick={() => registerUser(values)}
          >
            Registrar
          </button>
          <button
            className="bg-blue-400 text-white px-10 py-4 rounded-md hover:opacity-75"
            onClick={() => loginUser(values)}
          >
            Ingresar
          </button>
          <button
            className="flex justify-center items-center bg-white py-4 px-10 text-gray-700 rounded-md hover:opacity-75 border"
            onClick={() => googleLogin()}
          >
            <FcGoogle className="text-3xl mr-2" />
            Ingresar con Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;