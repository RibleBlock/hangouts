import express from 'express';
import cors from 'cors';
import routes from './routes';

const origin = process.env.ALLOWED_URL;
const port = process.env.PORT || 3333;

const app = express();

app.use(cors({ origin }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => console.log('Server iniciado'));
