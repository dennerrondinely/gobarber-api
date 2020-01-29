import { Router } from 'express';

import UserController from './app/controllers/UserCpntroller';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/sessions', SessionController.store);

export default routes;
