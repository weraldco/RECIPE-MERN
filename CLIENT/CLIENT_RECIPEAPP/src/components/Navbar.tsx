import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [cookies, setCookies] = useCookies(['access_token']);

	const handleLogout = () => {
		setCookies('access_token', '');
		window.localStorage.removeItem('userID');
	};
	console.log(cookies);
	return (
		<>
			<div className="flex gap-1">
				<Link className="p-3  bg-gray-900 text-white hover:bg-gray-600" to="/">
					Home
				</Link>

				<Link
					className="p-3  bg-gray-900 text-white hover:bg-gray-600"
					to="/all-recipe"
				>
					Recipes
				</Link>

				{!cookies.access_token ? (
					<>
						<Link
							className="p-3  bg-gray-900 text-white hover:bg-gray-600"
							to="/registration"
						>
							Register
						</Link>
						<Link
							className="p-3  bg-gray-900 text-white hover:bg-gray-600"
							to="/login"
						>
							Login
						</Link>
					</>
				) : (
					<button onClick={handleLogout}>Logout</button>
				)}
			</div>
		</>
	);
};

export default Navbar;
