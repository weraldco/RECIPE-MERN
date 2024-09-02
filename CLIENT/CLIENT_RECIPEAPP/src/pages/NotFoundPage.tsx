import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const navigate = useNavigate();
	const [count, setCount] = useState(5);
	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 5000);
		setInterval(() => {
			setCount(count - 1);
		}, 1000);
	});

	return (
		<>
			<div className="">
				<div className="grid  place-content-center">
					<p className="text-5xl font-bold">404:</p>
					<p className="text-xl ">
						Page is not existing or you are not allowed to access this page.
						<br />
						You are redirecting to
						<Link to="/" className="text-green-400">
							Home page
						</Link>
						in {count} seconds. Thank you.
					</p>
				</div>
			</div>
		</>
	);
};

export default NotFoundPage;
