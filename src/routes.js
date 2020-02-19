import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// MIDDLEWARE GLOBAL apartir daqui! As rotas anteriores não são afetadas
routes.use(AuthMiddleware);

routes.put('/users', UserController.update);

// upload.single('file') // upload de um unico ficheiro, de nome no req 'file'
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
