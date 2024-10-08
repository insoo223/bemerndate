import express from 'express';
import {mongoose as mgs} from 'mongoose';
import cors from 'cors';
import connectDB from './db.js';
import Cards from './dbCards.js';

const app = express();
const port = process.env.PORT || 8001;

//---- Setup Middlewares

main().catch((err) => console.log(err));
async function main() {
  connectDB();
}

//added by Insoo (Aug 31, 2023) while doing login credential mgmt by MongoDB
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  app.close(() => process.exit(1))
})

app.use(express.json());
app.use(cors());

//---- Setup API endpoints

app.get('/', (rq, rs) => rs.status(200).send('Hello Insoo!'));

app.post('/dating/cards', (rq, rs) => {
	const dbCard = rq.body;

	Cards.create(dbCard)
		.then((data) => rs.status(201).send(data))
		.catch((err) => rs.status(500).send(data));
}); //app.post ('/dating/cards'...)

app.get('/dating/cards', (rq, rs) => {
	Cards.find ()
		.then((data) => rs.status(200).send(data))
		.catch((err) => rs.status(500).send(data));
}); //app.get ('/dating/cards'...)
 
app.listen(port, () => console.log(`Linstening on ${port} ...`));

