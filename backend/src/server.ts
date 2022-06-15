import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => console.log(`Server iniciado em http://localhost:${port}`));
