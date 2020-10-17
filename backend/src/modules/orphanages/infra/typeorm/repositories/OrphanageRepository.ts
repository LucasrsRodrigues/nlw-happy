import { getRepository, Repository } from 'typeorm';

import IOrphanageRepository from '@modules/orphanages/repositories/IOrphanageRepository';
import ICreateOrphanageDTO from '@modules/orphanages/dtos/ICreateOrphanageDTO';

import Orphanage from '@modules/orphanages/infra/typeorm/entities/Orphanage';

class OrphanageRepository implements IOrphanageRepository {
  private ormRepository: Repository<Orphanage>;

  constructor() {
    this.ormRepository = getRepository(Orphanage);
  }

  public async findByName(name: string): Promise<Orphanage | undefined> {
    const findOrphanage = await this.ormRepository.findOne({
      where: { name },
    });

    return findOrphanage;
  }

  public async create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  }: ICreateOrphanageDTO): Promise<Orphanage>{
    const orphanage = this.ormRepository.create({name, latitude, longitude, about, instructions, opening_hours,open_on_weekends});

    await this.ormRepository.save(orphanage);

    return orphanage;
  };

  public async findAllOrphanages(): Promise<Orphanage[]>{
    const orphanages = this.ormRepository.find();

    return orphanages;
  }

  public async findOneOrphanage(id: string): Promise<Orphanage>{
    const orphanage = await this.ormRepository.findOneOrFail(id);

    return orphanage;
  }
}

export default OrphanageRepository;
