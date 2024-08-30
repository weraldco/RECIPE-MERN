import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<>
			<div className="flex gap-1">
				<Link className="p-3  bg-gray-900 text-white hover:bg-gray-600" to="/">
					Home
				</Link>

				<Link
					className="p-3  bg-gray-900 text-white hover:bg-gray-600"
					to="/create-recipe"
				>
					Create Recipe
				</Link>
				<Link
					className="p-3  bg-gray-900 text-white hover:bg-gray-600"
					to="/save-recipe"
				>
					Save Recipe
				</Link>
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
			</div>
		</>
	);
};

export default Navbar;
