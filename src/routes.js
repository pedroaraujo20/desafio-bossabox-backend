import { Router } from 'express';

const routes = new Router();

import ToolController from './app/controllers/ToolController';

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

export default routes;