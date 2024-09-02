import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [_, setCookies] = useCookies(['access_token', 'username']);
	const navigate = useNavigate();
	const [success, setSuccess] = useState<string>();
	const [error, setError] = useState<string>();

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:3001/auth/login', {
				username,
				password,
			});
			setSuccess('');

			if (response.status === 202) return setError(response.data.message);
			setError('');
			setCookies('access_token', response.data.accessToken);
			setCookies('username', username);

			setSuccess(response.data.message);
			window.localStorage.setItem('userID', response.data.userID);
			navigate('/');
		} catch (err) {
			console.error(err);
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
					onSubmit={onSubmit}
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
