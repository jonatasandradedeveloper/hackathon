import {Router} from 'express';
 
const routers = Router();

import clientRouter from '../app/controllers/clients'
import addressRouter from '../app/controllers/adresses'

routers.get('/', (req, res) => {
  return req.json("Sucesso");
});

routers.get('/clients', clientRouter);
routers.get('/address', addressRouter);

export default routers;