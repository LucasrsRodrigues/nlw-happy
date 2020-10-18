import "reflect-metadata"
import express from 'express';
import {errors } from 'celebrate';
import routes from './routes';

import uploadConfig from '@config/upload';


import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(express.json());
app.use('/files',express.static(uploadConfig.directory));
app.use(routes);
app.use(errors());





app.listen(3333, () => {
   console.log('🚀 Server started on port 3333!');
})
