import express from 'express';
import route from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(route);

app.listen(port, () => console.log(`Server iniciado em http://localhost:${port}`));
