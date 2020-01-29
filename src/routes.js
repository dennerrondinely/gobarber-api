import { Router } from 'express';

import UserController from './app/controllers/UserCpntroller';
import SessionController from './app/controllers/SessionController';

import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(auth);

routes.put('/users', UserController.update);

export default routes;
