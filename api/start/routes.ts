import {Router} from 'express';
 
const routers = Router();

import clientsRouter from '../app/controllers/clients_old'
import addressesRouter from '../app/controllers/addresses'
import contactsRouter from '../app/controllers/contacts'
import categoriesRouter from '../app/controllers/categories'
import productsRouter from '../app/controllers/products'
import salesItemsRouter from '../app/controllers/sales_orders_items'
import salesOrdersRouter from '../app/controllers/sales_orders'

routers.get('/categories', categoriesRouter);
routers.post('/categorie', categoriesRouter);

routers.get('/clients', clientsRouter);
routers.post('/client', clientsRouter);

routers.get('/addresses', addressesRouter);
routers.post('/address', addressesRouter);

routers.get('/contacts', contactsRouter);
routers.post('/contact', contactsRouter);

routers.get('/product', productsRouter);
routers.get('/product/:id', productsRouter);
routers.post('/product', productsRouter);

routers.get('/sales_items', salesItemsRouter);

routers.get('/sales_orders', salesOrdersRouter);


export default routers;