import {Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import OrphanagesController from '../controllers/OrphanagesController';
import { celebrate, Joi, Segments } from 'celebrate';

const OrphanageRouter = Router();
const upload = multer(uploadConfig);


const orphanagesController = new OrphanagesController();

OrphanageRouter.get('/', orphanagesController.index);

OrphanageRouter.get('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}) ,orphanagesController.show);

OrphanageRouter.post('/',celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    latitude:Joi.number().required(),
    longitude:Joi.number().required(),
    about:Joi.string().required(),
    instructions:Joi.string().required(),
    opening_hours:Joi.string().required(),
    open_on_weekends:Joi.string().required(),
    images: Joi.array().items(Joi.object({
      path: Joi.string().required()
    })),
  }

}), upload.array('images') ,orphanagesController.create);


export default OrphanageRouter;
