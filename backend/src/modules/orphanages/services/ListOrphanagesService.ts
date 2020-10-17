import { injectable, inject } from 'tsyringe';
import IOrphanageRepository from '../repositories/IOrphanageRepository';

@injectable()
class ListOrphanagesService {
  constructor(
    @inject('OrphanageRepository')
    private orphanageRepository: IOrphanageRepository
  ){}

  public async execute(){
    const orphanages = await this.orphanageRepository.findAllOrphanages();

    return orphanages;
  }
}

export default ListOrphanagesService;
