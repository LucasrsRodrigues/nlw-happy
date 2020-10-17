import { inject, injectable } from 'tsyringe';
import Orphanage from '@modules/orphanages/infra/typeorm/entities/Orphanage';
import IOrphanageRepository from '@modules/orphanages/repositories/IOrphanageRepository';
interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

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
  }: IRequest): Promise<Orphanage> {

    const checkOrphanageExists = this.orphanageRepository.findByName(name);

    if (!checkOrphanageExists) {
      throw new Error('Orphanage has created');
    }

    const orphanage = await this.orphanageRepository.create({
      about,
      instructions,
      latitude,
      longitude,
      name,
      open_on_weekends,
      opening_hours,
    });

    return orphanage;
  }
}

export default CreateOrphanageService;
