import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrphanageService from '@modules/orphanages/services/CreateOrphanageService';
import ListOrphanagesService from '@modules/orphanages/services/ListOrphanagesService';
import ListOrphanageService from '@modules/orphanages/services/ListOrphanageService';


export default class OrphanagesController {

  public async create(request:Request, response:Response): Promise<Response>{

      const {
         name,
         latitude,
         longitude,
         about,
         instructions,
         opening_hours,
         open_on_weekends,
      } = request.body;

      const createOrphanage = container.resolve(CreateOrphanageService);

      const orphanage = await createOrphanage.execute({
         name,
         latitude,
         longitude,
         about,
         instructions,
         opening_hours,
         open_on_weekends,
      });

      return response.json(orphanage);
  }

  public async index(request:Request, response:Response): Promise<Response>{
    const listOrphanages = container.resolve(ListOrphanagesService);

    const orphanages = await listOrphanages.execute();

    return response.json(orphanages);
  }

  public async show(request:Request, response:Response): Promise<Response>{
    const { id } = request.params;

    const listOrpahanage = container.resolve(ListOrphanageService);

    const orphanage = await listOrpahanage.execute(id);

    return response.json(orphanage);
  }
}
