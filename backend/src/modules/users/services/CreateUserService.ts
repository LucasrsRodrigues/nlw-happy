import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/Users';
import IUsersRepository from '../repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

interface Request{
   name: string;
   email:string;
   password:string;
}

@injectable()
class CreateUserService  {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
    ){}

   public async execute({name, email, password}:Request): Promise<User>{


      const checkUserExists = await this.usersRepository.findByEmail(email);

      if(checkUserExists) {
         throw new AppError('Email address already used.');
      }

      const hashedPassword = await hash(password, 8);

      const user = await this.usersRepository.create({
         name,
         email,
         password:hashedPassword
      });

      return user
   }
}

export default CreateUserService;
