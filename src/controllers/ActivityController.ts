import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

export default class ActivityController {

  async getAllActivities(req: Request, res: Response) {
    try { 
      const data = await db.select("*").table('activities');
      
      res.json(data)
    } catch (err) {

      console.log(err)
      res.status(400)
    }

  }

  async createActivity(req: Request, res: Response) {

    const {  
      name,
      description,
      day,
      time
    } = req.body

    console.log({
      name, description, day, time
    })

    const trx = await db.transaction();

    try {

      console.log('> Criando conexão com db e inserindo dados');
      await trx('activities').insert({
        name, description, day, time: convertHourToMinutes(time)
      })

      await trx.commit();

      return res.status(201).send('Criado com sucesso')

    } catch { 

      await trx.rollback()

      return res.status(400).send()

    }
  }
}
