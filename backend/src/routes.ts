import express from 'express';
import usersControllers from './controllers/users.controller';

const route = express.Router();

route.get('/users', usersControllers.selectAllUsers);

route.post('/login', usersControllers.store);
route.post('/createUser', usersControllers.create);

export default route;
