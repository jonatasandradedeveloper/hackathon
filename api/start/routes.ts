import {Router} from 'express';
 
const routers = Router();

import clientRouter from '../app/controllers/clients'

routers.get('/', (req, res) => {
  return req.json("Sucesso");
});

routers.get('/clients', clientRouter);

export default routers;