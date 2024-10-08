import express from 'express';
import {mongoose as mgs} from 'mongoose';

const app = express();
const port = process.env.PORT || 8001;

app.get('/', (rq, rs) => rs.status(200).send('Hello Insoo!'));
app.listen(port, () => console.log(`Linstening on ${port} ...`));

