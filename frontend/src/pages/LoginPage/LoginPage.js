import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container flex flex-col gap-2">
      <h1 className=" text-4xl text-[#0f4c5c]">Welcome to the BookNook!</h1>
      <form className="form rounded-lg shadow-lg bg-slate-100 p-4" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border rounded-lg"
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border rounded-lg"
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <button>Login!</button>
        <Link to="/register" className=" transition-all hover:scale-110 font-bold text-[#0f4c5c]">Click to register!</Link>
      </form>
    </div>
  );
};

export default LoginPage;
