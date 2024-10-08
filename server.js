import express from 'express';
import {mongoose as mgs} from 'mongoose';
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


//---- Setup API endpoints

app.get('/', (rq, rs) => rs.status(200).send('Hello Insoo!'));

app.post('/dating/cards', (rq, rs) => {
	const dbCard = rq.body;

	Cards.create(dbCard, (err, data) => {
		if (err)
			rs.status(500).send(err);
		else
			rs.status(200).send(data);
	}); // Cards.create 
}); //app.post ('/dating/cards'...)

app.get('/dating/cards', (rq, rs) => {
	Cards.find ((err, data) => {
		if (err)
			rs.status(500).send(err);
		else
			rs.status(200).send(data);
	}); // Cards.find 
}); //app.get ('/dating/cards'...)
 
app.listen(port, () => console.log(`Linstening on ${port} ...`));

