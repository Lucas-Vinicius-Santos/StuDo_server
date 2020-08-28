import { Request, Response } from 'express';

import convertMinuteToHour from '../utils/convertMinuteToHour';
import convertHourToMinutes from '../utils/convertHourToMinutes';

import db from '../database/connection';

interface Activity {
  variant: 'green' | 'blue' | 'orange' | 'red';
  id: number;
  subject: string;
  description: string;
  day: string;
  time: string;
}

export default class ActivityController {

  async getAllActivities(req: Request, res: Response) {
    try { 
      const data = await db.select("*").table('activities');

      console.log(data) // TEMP

      const cabrito = []

      for ( let i=0; i < data.length; i++ ) {
        let aux = {
          id: data[i].id,
          subject: data[i].subject,
          description: data[i].description,
          day: data[i].day,
          time: convertMinuteToHour(data[i].time.toString()),
          variant: 'green'
        }
        cabrito.push(aux)
      }

      res.json(cabrito)
    } catch (err) {

      console.log(err)
      res.status(400)
    }

  }

  async createActivity(req: Request, res: Response) {

    const {  
      subject,
      description,
      day,
      time
    } = req.body

    const trx = await db.transaction();

    try {

      await trx('activities').insert({
        subject, description, day, time: convertHourToMinutes(time)
      })

      await trx.commit();

      return res.status(201).send('Criado com sucesso')

    } catch { 

      await trx.rollback()

      return res.status(400).send()

    }
  }

  async deleteActivity(req: Request, res: Response) {
    console.log('> Dentro da rota deleteActivity')
    const { deleteId }= req.query;
    const deleteIdValue = (deleteId as string)[1]

    console.log(deleteIdValue, req.query)

    await db('activities').where({id: deleteIdValue}).delete().then(data => console.log(data))

    return res.status(200).send('Excluído com sucesso')
  }
}
