import express from 'express';

const routes = express.Router();

routes.get('/to-do-list', (req, res) => {
  return res.send('Tudo certo aki meu camarada')
})

routes.post('new-activity', (req, res) => {
  return res.send('opa')
})

export default routes;