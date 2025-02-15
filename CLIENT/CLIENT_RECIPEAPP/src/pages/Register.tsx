import axios from "axios";
import { useState } from "react";

const Registration = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [rpassword, setRPassword] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [error, setError] = useState<string>();

  const handleSubmit = async (event: MouseEvent) => {
    event?.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      setError("");
      setSuccess("Successfully Register new account!");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setSuccess("");
      setError("All fields are required..");
    }
  };

  return (
    <>
      <div className="grid h-[90vh] place-content-center">
        <h2 className="mb-2 text-2xl font-bold">Registration</h2>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        <form
          className="grid place-content-center gap-3"
          onSubmit={handleSubmit}
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
          {/* <div className="grid items-center">
						<label className="text-sm text-gray-600" htmlFor="rpwd">
							Repeat your password:{' '}
						</label>
						<input
							className="bg-slate-200 p-2 col-span-2 rounded-lg"
							placeholder="Enter your password.."
							type="text"
							name=""
							id="rpwd"
							value={rpassword}
							onChange={(e) => {
								setRPassword(e.target.value);
							}}
						/>
					</div> */}
          <button
            className="mt-5 rounded-lg bg-blue-500 p-3 text-white transition-all hover:bg-blue-400 active:bg-blue-500"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
