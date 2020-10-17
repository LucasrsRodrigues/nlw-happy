import { container } from 'tsyringe';

import IOrphanageRepository from '@modules/orphanages/repositories/IOrphanageRepository';
import OrphanageRepository from '@modules/orphanages/infra/typeorm/repositories/OrphanageRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';



container.registerSingleton<IOrphanageRepository>(
  'OrphanageRepository',
  OrphanageRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
