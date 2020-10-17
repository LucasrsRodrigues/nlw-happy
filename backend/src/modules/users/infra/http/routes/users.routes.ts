import { Router } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
   try {

   } catch (err) {
      return response.status(400).json({error: err.message});
   }
});

export default userRouter;
