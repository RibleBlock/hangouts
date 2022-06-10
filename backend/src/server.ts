import express from 'express';
import routes from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express);
app.use(routes);

app.listen(port, () => console.log(`Server iniciado em http://localhost:${port}`));
