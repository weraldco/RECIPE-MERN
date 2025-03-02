import cors from 'cors';

export const configureCors = () => {
	return cors({
		origin: '*',
		// origin: (origin, callback) => {
		// 	const allowedOrigins = [
		// 		'http://localhost:5173/', // local dev
		// 		'https://spoonful-recipes.vercel.app', // production domain
		// 	];

		// 	if (origin || allowedOrigins.indexOf(origin) !== -1) {
		// 		// Giving permission so that req can be allowed.
		// 		callback(null, true);
		// 	} else {
		// 		callback(new Error('Not allowed by cors'));
		// 	}
		// },
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'],
		exposedHeaders: ['X-Total-Count', 'Content-Range'],
		credentials: true,
		preflightContinue: false,
		maxAge: 6000,
		optionsSuccessStatus: 204,
	});
};
