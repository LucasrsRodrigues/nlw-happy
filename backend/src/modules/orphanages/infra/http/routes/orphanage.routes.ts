import {Router } from 'express';
import OrphanagesController from '../controllers/OrphanagesController';

const OrphanageRouter = Router();
const orphanagesController = new OrphanagesController();

OrphanageRouter.post('/', orphanagesController.create);
OrphanageRouter.get('/', orphanagesController.index);
OrphanageRouter.get('/:id', orphanagesController.show);


export default OrphanageRouter;
