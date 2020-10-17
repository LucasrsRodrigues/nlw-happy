import { Router } from 'express';

import OrphanageRouter from '@modules/orphanages/infra/http/routes/orphanage.routes';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/orphanages', OrphanageRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

export default routes;
