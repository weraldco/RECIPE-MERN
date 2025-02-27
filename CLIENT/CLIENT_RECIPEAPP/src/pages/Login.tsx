/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [_, setCookies] = useCookies(["access_token", "username"]);
  const navigate = useNavigate();
  const [success, setSuccess] = useState<string>();
  const [error, setError] = useState<string>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setSuccess("");

      if (response.status === 202) return setError(response.data.message);
      setError("");
      setCookies("access_token", response.data.accessToken);
      setCookies("username", username);

      setSuccess(response.data.message);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="grid h-[90vh] place-content-center">
        <h2 className="mb-2 text-2xl font-bold">Login</h2>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        <form
          className="grid place-content-center gap-3"
          action=""
          onSubmit={onSubmit}
        >
          <div className="grid w-[300px] items-center">
            <label className="text-sm text-gray-600" htmlFor="uname">
              Your username:{" "}
            </label>
            <input
              className="rounded-lg bg-slate-200 p-2"
              placeholder="Enter your username.."
              type="text"
              name=""
              id="uname"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="grid items-center">
            <label className="text-sm text-gray-600" htmlFor="pwd">
              Your password:{" "}
            </label>
            <input
              className="col-span-2 rounded-lg bg-slate-200 p-2"
              placeholder="Enter your password.."
              type="password"
              name=""
              id="pwd"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="mt-5 rounded-lg bg-blue-500 p-3 text-white transition-all hover:bg-blue-400 active:bg-blue-500"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
