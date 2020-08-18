import express from 'express';

import ActivityController from './controllers/ActivityController'

const routes = express.Router();

const activityController = new ActivityController()


routes.get('/to-do-list', activityController.getAllActivities)

routes.post('/new-activity', activityController.createActivity)

export default routes;