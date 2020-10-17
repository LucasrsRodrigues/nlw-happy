import Orphanage from '@modules/orphanages/infra/typeorm/entities/Orphanage';
import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO';

export default interface IOrphanageRepository {
  create(data: ICreateOrphanageDTO): Promise<Orphanage>;
  findByName(name: string): Promise<Orphanage | undefined>;
  findAllOrphanages(): Promise<Orphanage[]>;
  findOneOrphanage(id: string): Promise<Orphanage>;
}
