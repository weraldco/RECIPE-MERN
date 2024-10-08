import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from '../model/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
	const { username, password } = req.body;

	const user = await UserModel.findOne({ username: username }).exec();
	if (user)
		return res.status(400).json({ message: 'your username already taken.' });

	try {
		const hashPassword = await bcrypt.hash(password, 10);

		console.log(`${username} - ${hashPassword}`);
		const result = await UserModel.create({
			username: username,
			password: hashPassword,
		});

		res.json(result);
	} catch (err) {
		console.error(err);
	}
});

router.post('/login', async (req, res) => {
	const { username, password } = req.body;

	if (!username)
		return res
			.status(202)
			.json({ message: 'You need to enter your username.' });
	if (!password)
		return res
			.status(202)
			.json({ message: 'You need to enter your password.' });
	try {
		const foundUser = await UserModel.findOne({ username: username }).exec();
		if (!foundUser)
			return res
				.status(202)
				.json({ message: 'User not found. Register first to login.' });

		const isMatch = await bcrypt.compare(password, foundUser.password);

		if (!isMatch) return res.status(202).json({ message: 'Wrong password' });

		const accessToken = jwt.sign({ id: foundUser._id }, 'secret');
		res.status(200).json({
			message: `You successfully login your account. ${username}`,
			accessToken: accessToken,
			userID: foundUser._id,
		});
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

router.post('/getuser', async (req, res) => {
	const { username } = req.body;
	const foundUser = await UserModel.findOne({ username: username });

	res.status(200).json({ foundUser });
});

export { router as userRouter };
