import express from 'express';
import flavorController from './controllers/flavor.controller';
import usersControllers from './controllers/users.controller';
import wishControllers from './controllers/wish.controller';

const route = express.Router();

route.get('/users', usersControllers.selectAllUsers);

route.post('/login', usersControllers.store);
route.post('/createUser', usersControllers.create);

route.post('/makewish', wishControllers.create);

route.get('/flavors', flavorController.read);

export default route;
