import express from 'express';
import usersControllers from './controllers/users.controller';

const route = express.Router();

route.get('/msg', (req, res) => res.send('alo'));
route.get('/getusers', usersControllers.selectAllUsers);

route.post('/login', usersControllers.store);
route.post('/createUser', usersControllers.create);

export default route;
