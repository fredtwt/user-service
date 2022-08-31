import { auth } from "../config/config.js"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from "firebase/auth"

export async function createUser(req, res) {
	try {
		const { email, password } = req.body
		if (email && password) {
			await createUserWithEmailAndPassword(auth, email, password)
			return res.status(201).json({
				message: "Created new user successfully!"
			})
		} else {
			return res.status(400).json({
				message: "Email and/or Password are missing!"
			})
		}
	} catch (error) {
		return res.status(400).json({
			code: error.code,
			message: error.message
		})
	}
}

export async function loginUser(req, res) {
	try {
		const { email, password } = req.body
		if (email && password) {
			await signInWithEmailAndPassword(auth, email, password)
			return res.status(201).json({
				message: "Login successfully!"
			})
		} else {
			return res.status(400).json({
				message: "Email and/or Password are missing!"
			})
		}
	} catch (error) {
		return res.status(400).json({
			code: error.code,
			message: error.message
		})
	}
}
