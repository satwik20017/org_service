import { Router } from 'express';
import { createEntity, createOrganisation, getLegalEntity, getLegalEntities, getOrganisation, getOrganisations, updateEntity, updateOrganisation } from './controllers/organisation';

const router = Router();


router.post('/createOrganisation', createOrganisation)
router.put('/updateOrganisation/:id', updateOrganisation)
router.get('/getOrganisations', getOrganisations)
router.get('/getOrganisation/:id', getOrganisation)


router.post('/createEntity', createEntity)
router.put('/updateEntity/:id', updateEntity)
router.get('/getLegalEntities', getLegalEntities)
router.get('/getLegalEntity/:id', getLegalEntity)



export default router;
