import { Router } from 'express'
import * as controllers from '../controllers/activities.js'


const router = Router()

router.get("/activities", controllers.getActivities);
router.get("/activities/:id", controllers.getActivity);
router.post("/activities", controllers.createActivities);
router.put("/activities/:id", controllers.updateActivities);
router.delete("/activities/:id", controllers.deleteActivities)

export default router;