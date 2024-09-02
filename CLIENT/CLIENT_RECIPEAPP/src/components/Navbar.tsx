import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const [cookies, setCookies] = useCookies(['access_token']);

	const handleLogout = () => {
		setCookies('access_token', '');
		window.localStorage.removeItem('userID');
		navigate('/');
	};

	const clickNewRecipe = () => {
		navigate('/create-recipe');
	};
	return (
		<>
			<div className="bg-slate-100 fixed top-0 left-0 right-0 grid grid-cols-3 p-2 z-50 shadow-md">
				<div className="grid place-content-start items-center grid-cols-2 ">
					<div className="text-xl">
						<Link to="/" className="text-red-600">
							Recipeace
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-2 w-[250px] place-content-start ">
						<Link
							className="hover:bg-slate-200 rounded-full text-center items-center p-2 transition-all"
							to="/"
						>
							Home
						</Link>
						<Link
							className="hover:bg-slate-200 active:bg-slate-300 rounded-full text-center items-center p-2 transition-all"
							to="/"
						>
							Favorites
						</Link>
					</div>
				</div>

				<div className="col-start-4 grid">
					{!cookies.access_token ? (
						<div className="grid grid-cols-2 place-content-center gap-2">
							<Link
								className="hover:bg-slate-200 active:bg-slate-300 rounded-full text-center items-center p-2 transition-all"
								to="/registration"
							>
								Register
							</Link>
							<Link
								className="hover:bg-slate-200 active:bg-slate-300 rounded-full text-center items-center p-2 transition-all"
								to="/login"
							>
								Login
							</Link>
						</div>
					) : (
						<div className="grid grid-cols-2 place-content-center gap-2">
							<button
								onClick={clickNewRecipe}
								className="hover:bg-slate-200 active:bg-slate-300 rounded-full text-center items-center p-2 transition-all"
							>
								Add Recipe
							</button>
							<button
								className="hover:bg-slate-200 active:bg-slate-300 rounded-full text-center items-center p-2 transition-all"
								onClick={handleLogout}
							>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
