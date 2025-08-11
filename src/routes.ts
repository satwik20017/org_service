import { Router } from 'express';
import { createEntity, createOrganisation, getLegalEntity, getLegalEntities, getOrganisation, getOrganisations, updateEntity, updateOrganisation, deleteLegalEntities, createLocation, updateLocation, deleteLocation, createDepartment, updateDepartment, deleteDepartment, getDepartments, getDepartment, getLocation, getLocations, createDesignation, updateDesignation, getDesignations, getDesignation, deleteDesignation, createShift, updateShift, getShifts, getShift, deleteShift, createHolidayCalender, updateHolidayCalender, getHolidayCalender, getHolidayCalenders, deleteHolidayCalender } from './controllers/organisation';

const router = Router();


router.post('/createOrganisation', createOrganisation)
router.put('/updateOrganisation', updateOrganisation)
router.get('/getOrganisations', getOrganisations)
router.get('/getOrganisation/:id', getOrganisation)


router.post('/createEntity', createEntity)
router.put('/updateEntity', updateEntity)
router.get('/getLegalEntities', getLegalEntities)
router.get('/getLegalEntity/:id', getLegalEntity)
router.delete('/deleteLegalEntities', deleteLegalEntities)


router.post('/createLocation', createLocation)
router.put('/updateLocation', updateLocation)
router.get('/getLocations', getLocations)
router.get('/getLocation/:id', getLocation)
router.delete('/deleteLocation', deleteLocation)


router.post('/createDepartment', createDepartment)
router.put('/updateDepartment', updateDepartment)
router.get('/getDepartments', getDepartments)
router.get('/getDepartment/:id', getDepartment)
router.delete('/deleteDepartment', deleteDepartment)


router.post('/createDesignation', createDesignation)
router.put('/updateDesignation', updateDesignation)
router.get('/getDesignations', getDesignations)
router.get('/getDesignation/:id', getDesignation)
router.delete('/deleteDesignation/:id', deleteDesignation)


router.post('/createShift', createShift)
router.put('/updateShift', updateShift)
router.get('/getShifts', getShifts)
router.get('/getShift/:id', getShift)
router.delete('/deleteShift/:id', deleteShift)


router.post('/createHolidayCalender', createHolidayCalender)
router.put('/updateHolidayCalender', updateHolidayCalender)
router.get('/getHolidayCalender/:id', getHolidayCalender)
router.get('/getHolidayCalenders', getHolidayCalenders)
router.delete('/deleteHolidayCalender/:id', deleteHolidayCalender)



export default router;
