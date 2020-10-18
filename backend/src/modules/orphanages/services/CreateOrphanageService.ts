import { inject, injectable } from 'tsyringe';
import Orphanage from '@modules/orphanages/infra/typeorm/entities/Orphanage';
import IOrphanageRepository from '@modules/orphanages/repositories/IOrphanageRepository';

import ICreateOrphanageDTO from '@modules/orphanages/dtos/ICreateOrphanageDTO';
import AppError from '@shared/errors/AppError';

@injectable()
class CreateOrphanageService {
  constructor(
    @inject('OrphanageRepository')
    private orphanageRepository:IOrphanageRepository){}

  public async execute({
    about,
    instructions,
    latitude,
    longitude,
    name,
    open_on_weekends,
    opening_hours,
    images
  }: ICreateOrphanageDTO): Promise<Orphanage> {

    const checkOrphanageExists = this.orphanageRepository.findByName(name);

    if (!checkOrphanageExists) {
      throw new AppError('Orphanage has created');
    }

    const orphanage = await this.orphanageRepository.create({
      about,
      instructions,
      latitude,
      longitude,
      name,
      open_on_weekends,
      opening_hours,
      images,
    });


    return orphanage;
  }
}

export default CreateOrphanageService;
