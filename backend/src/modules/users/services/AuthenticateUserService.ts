import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';


import Users from "../infra/typeorm/entities/Users";
import IUsersRepository from "../repositories/IUsersRepository";
import AppError from '@shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}
interface IReponse{
  user: Users;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
    ){}
  public async execute({ email, password}: IRequest): Promise<IReponse>{


    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched){
      throw new AppError('Incorrect email/password combination', 401);
    }

    const token = sign({}, '79a44d9c72e0793c061ac4446f90c46f', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {user, token}
  }
}

export default AuthenticateUserService;
