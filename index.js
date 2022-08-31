import express from 'express';
import cors from 'cors';
import { createUser, loginUser } from './controller/user-controller.js';

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) // config cors so that front-end can use
app.options('*', cors())

const router = express.Router()

// Controller will contain all the User-defined Routes
router.get('/', (_, res) => res.send("hello world from user-service"))
router.post('/signup', createUser)
router.post('/login', loginUser)

app.use('/api/user', router).all((_, res) => {
	res.setHeader('content-type', 'application/json')
	res.setHeader('Access-Control-Allow-Origin', '*')
})

app.listen(port, () => {
	console.log('user-service listening on port 8000')
})