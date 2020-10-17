import { response } from 'express';
import { injectable, inject } from 'tsyringe';
import Orphanage from '../infra/typeorm/entities/Orphanage';
import IOrphanageRepository from '../repositories/IOrphanageRepository';


@injectable()
class ListOrphanageService{
  constructor(
    @inject('OrphanageRepository')
    private orphanateRepository: IOrphanageRepository
  ){}

  public async execute(name: string): Promise<Orphanage>{
    const orphanage = await this.orphanateRepository.findOneOrphanage(name);

    return orphanage;
  }
}

export default ListOrphanageService;
