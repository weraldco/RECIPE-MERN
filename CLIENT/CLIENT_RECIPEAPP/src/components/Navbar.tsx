import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const [cookies, setCookies] = useCookies(['access_token', 'username']);
	const [isMenu, setIsMenu] = useState(false);

	const handleLogout = () => {
		setCookies('access_token', '');
		setCookies('username', '');
		window.localStorage.removeItem('userID');
		navigate('/');
	};

	const clickNewRecipe = () => {
		navigate('/create-recipe');
	};
	const toggleMenu = () => {
		const navLinks = document.querySelector('.nav-links');
		setIsMenu((prev) => !prev);
		if (navLinks?.classList.contains('top-[8%]')) {
			navLinks?.classList.add('top-[-100%]');
			navLinks?.classList.remove('top-[8%]');
		} else {
			navLinks?.classList.remove('top-[-100%]');
			navLinks?.classList.add('top-[8%]');
		}
		console.log(navLinks);
	};

	// console.log(isMenu);
	return (
		<>
			<header className="bg-white text-[0.85em] py-2 z-50">
				<nav className="flex justify-between items-center w-[92%] mx-auto">
					<div className="z-index-50">
						<Link to="/" className="flex justify-between items-center gap-2">
							<img className="w-16" src="/img/logo.png" alt="" />
							<div>
								<span className="text-[14px]  font-sans font-bold">
									SPOONFUL RECIPES
								</span>
								<p className="text-[10px]  font-sans">created in React</p>
							</div>
						</Link>
					</div>
					<div className="nav-links md:static absolute  md:min-h-fit min-h-[40vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 z-50 bg-white">
						<ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
							<li className="hover:bg-gray-200 rounded-full px-3 py-2 transition-all text-center">
								<Link className="" to="/">
									Home
								</Link>
							</li>
							<li className="hover:bg-gray-200 rounded-full px-3 py-2 transition-all text-center">
								<Link className="" to="/">
									Recipes
								</Link>
							</li>
							<li className="hover:bg-gray-200 rounded-full px-3 py-2 transition-all text-center">
								<Link className="" to="/">
									Blogs
								</Link>
							</li>
							<li className="hover:bg-gray-200 rounded-full px-3 py-2 transition-all text-center">
								{/* {cookies.access_token && ( */}
								<Link className="" to="/my-favorite">
									Favorites
								</Link>
								{/* )} */}
							</li>
						</ul>
					</div>
					<div className="flex items-center gap-5">
						<Link
							className="bg-blue-400 rounded-full text-white px-3 py-2 hover:bg-blue-300 transition-all"
							to="/login"
						>
							Sign in?
						</Link>
						{isMenu ? (
							<CgClose
								onClick={toggleMenu}
								className="text-2xl cursor-pointer "
							/>
						) : (
							<BiMenu
								onClick={toggleMenu}
								className="text-2xl cursor-pointer md:hidden"
							/>
						)}
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
