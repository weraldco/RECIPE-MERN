import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const Login = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	// const [rpassword, setRPassword] = useState<string>();
	const [_, setCookies] = useCookies(['access_token']);

	const [success, setSuccess] = useState<string>();
	const [error, setError] = useState<string>();

	const handleSubmit = async (event: MouseEvent) => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:3001/auth/login', {
				username,
				password,
			});
			setError('');
			setCookies('access_token', response.data.token);
			setSuccess('Successfully login');
		} catch (err) {
			console.error(err);
			setError('Incorrect password');
			setSuccess('');
		}
	};
	return (
		<>
			<div className="grid place-content-center">
				<h2 className="text-2xl mb-2 font-bold">Login</h2>
				{error && <div className="text-red-500">{error}</div>}
				{success && <div className="text-green-500">{success}</div>}
				<form
					className="grid place-content-center gap-3 "
					action=""
					onSubmit={handleSubmit}
				>
					<div className="grid items-center  w-[300px]">
						<label className="text-sm text-gray-600" htmlFor="uname">
							Your username:{' '}
						</label>
						<input
							className="bg-slate-200 p-2 rounded-lg"
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
							Your password:{' '}
						</label>
						<input
							className="bg-slate-200 p-2 col-span-2  rounded-lg"
							placeholder="Enter your password.."
							type="text"
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
						className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-400 active:bg-blue-500 transition-all mt-5"
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
