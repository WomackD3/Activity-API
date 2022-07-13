import { Router } from 'express'
import activitiesRoutes from './activities.js'
const router = Router();

router.get('/', (req, res) => res.send("This is the api root"))

router.use('/', activitiesRoutes)


export default router;
