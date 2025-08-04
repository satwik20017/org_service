import { Router } from 'express';
import { createEntity, createOrganisation, getLegalEntity, getLegalEntities, getOrganisation, getOrganisations, updateEntity, updateOrganisation, deleteLegalEntities, createLocation, updateLocation, deleteLocation, createDepartment, updateDepartment, deleteDepartment, getDepartments, getDepartment } from './controllers/organisation';

const router = Router();


router.post('/createOrganisation', createOrganisation)
router.put('/updateOrganisation/:id', updateOrganisation)
router.get('/getOrganisations', getOrganisations)
router.get('/getOrganisation/:id', getOrganisation)


router.post('/createEntity', createEntity)
router.put('/updateEntity', updateEntity)
router.get('/getLegalEntities', getLegalEntities)
router.get('/getLegalEntity/:id', getLegalEntity)
router.delete('/deleteLegalEntities', deleteLegalEntities)


router.post('/createLocation', createLocation)
router.put('/updateLocation', updateLocation)
// router.get('/getLocations', getLocation)
// router.get('/getLocation/:id', getLocation)
router.delete('/deleteLocation', deleteLocation)


router.post('/createDepartment', createDepartment)
router.put('/updateDepartment', updateDepartment)
router.get('/getDepartments', getDepartments)
router.get('/getDepartment/:id', getDepartment)
router.delete('/deleteDepartment', deleteDepartment)



export default router;
