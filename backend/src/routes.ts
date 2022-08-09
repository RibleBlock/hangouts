import express, { Request, Response } from 'express';
import flavorController from './controllers/flavor.controller';
import usersControllers from './controllers/users.controller';
import wishControllers from './controllers/wish.controller';

const route = express.Router();

route.patch('/updateuserdata', usersControllers.selectUser);

route.post('/login', usersControllers.store);
route.post('/createUser', usersControllers.create);

route.post('/makewish', wishControllers.create);
route.post('/getcart', wishControllers.getCart);

route.post('/flavors', flavorController.readFlavors);
route.post('/flavorsfilter', flavorController.flavorFilter);
route.post('/sizes', flavorController.getSizes);
route.post('/borders', flavorController.getBorders);

export default route;
