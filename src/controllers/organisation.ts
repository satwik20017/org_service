import { NextFunction, Request, Response } from 'express';
import { query } from '../db';


export const createOrganisation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgName, orgCode, logo, country, language, currency, gst_vat_number, website, email, contact_number, address
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddOrganization(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                id, orgName, orgCode, logo, country, language, currency, gst_vat_number, website, email, contact_number, address
            ]
        );

        const results = SPcall.rows[0];
        if(id){
            res.status(201).json({ status: 200, message: "Organisation updated succuessfully", data: results[0]?.[0] });
        }
        res.status(201).json({ status: 200, message: "Organisation created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating organisation" });
    };
};

export const updateOrganisation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgCode, orgName, logo, country, language, currency, gst_vat_number, website
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddOrganization(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                id, orgCode, orgName, logo, country, language, currency, gst_vat_number, website
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Organisation created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating organisation" });
    };
};

export const getOrganisations = async (req: Request, res: Response) => {
    try {
        const SPcall = await query(
            "CALL SP_GetOrganizations(?)", [null]
        );

        const results = SPcall.rows?.[0];
        res.status(201).json({ status: 200, message: "Organisation fetched succuessfully", data: results });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetched organisation" });
    };
};

export const getOrganisation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const SPcall = await query("CALL SP_GetOrganizations(?)", [id]);
        const resultSet = SPcall.rows?.[0]?.[0];

        if (!resultSet) {
            return res.status(404).json({ status: 404, message: "Organisation not found" });
        }

        res.status(200).json({
            status: 200,
            message: "Organisation fetched successfully",
            data: resultSet
        });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ status: 500, message: "Error in fetching organisation" });
    }
};


export const createEntity = async (req: Request, res: Response) => {
    try {
        const {
            id, groupName, entityName, entityType, country, pan_vat_number, activeEntity, orgId
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddLegalEntity(?, ?, ?, ?, ?, ?, ?, ?)",
            [
                id, orgId, groupName, entityName, pan_vat_number, entityType, country, activeEntity
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal Entity created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating Legal Entity" });
    };
};

export const updateEntity = async (req: Request, res: Response) => {
    try {
        const {
            groupName, entityName, entityType, country, pan_vat_number, activeEntity, id, orgId
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddLegalEntity(?, ?, ?, ?, ?, ?, ?, ?)",
            [
                id, orgId, groupName, entityName, pan_vat_number, entityType, country, activeEntity
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal entity updated succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in updating Legal entity" });
    };
};

export const getLegalEntities = async (req: Request, res: Response) => {
    try {
        const SPcall = await query(
            "CALL SP_GetLegalEntities(?)", [null]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal Entities fetched succuessfully", data: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching legal entities" });
    };
};

export const getLegalEntity = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const SPcall = await query(
            "CALL SP_GetLegalEntities(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal entity fetched succuessfully", data: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching legal entity" });
    };
};

export const deleteLegalEntities = async (req: Request, res: Response) => {
    try {
        const { id } = req.body
        const SPcall = await query(
            "CALL SP_DeleteLegalEntity(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal entity deleted succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in deleting legal entity" });
    };
};


export const createLocation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, locationName, locationType, country, state, city, timeZone, address, workWeek, holidayCalendar, isActiveEntity 
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddLocation(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
            id, orgId, locationName, locationType, country, state, city, timeZone, address, workWeek, holidayCalendar, isActiveEntity 
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Location created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating Location" });
    };
};

export const updateLocation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, locationName, locationType, country, state, city, timeZone, address, workWeek, holidayCalendar, isActiveEntity 
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddLocation(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
            id, orgId, locationName, locationType, country, state, city, timeZone, address, workWeek, holidayCalendar, isActiveEntity 
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Location updated succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in updating Location" });
    };
};

export const deleteLocation = async (req: Request, res: Response) => {
    try {
        const { id } = req.body
        const SPcall = await query(
            "CALL SP_DeleteLocation(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Location deleted succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in deleting location" });
    };
};

export const getLocations = async (req: Request, res: Response) => {
    try {
        const SPcall = await query(
            "CALL SP_GetLocations(?)", [null]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal Entities fetched succuessfully", data: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching legal entities" });
    };
};

export const getLocation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const SPcall = await query(
            "CALL SP_GetLocations(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal Entities fetched succuessfully", data: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching legal entities" });
    };
};

export const createDepartment = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, departmentName, costCenterCode, parentDepartment 
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddDepartment(?, ?, ?, ?, ?)",
            [
            id, orgId, departmentName, costCenterCode, parentDepartment
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Department created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating Department" });
    };
};


export const updateDepartment = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, departmentName, costCenterCode, parentDepartment 
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddDepartment(?, ?, ?, ?, ?)",
            [
            id, orgId, departmentName, costCenterCode, parentDepartment
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Department updated succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in updating Department" });
    };
};

export const deleteDepartment = async (req: Request, res: Response) => {
    try {
        const { id } = req.body
        const SPcall = await query(
            "CALL SP_DeleteDepartment(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Department deleted succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in deleting department" });
    };
};

export const getDepartment = async (req: Request, res: Response) => {
    try {
        const { id } = req.body
        const SPcall = await query(
            "CALL SP_GetDepartment_temp(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Departments fetched succuessfully", data: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching department" });
    };
};

export const getDepartments = async (req: Request, res: Response) => {
    try {
        const SPcall = await query(
            "CALL SP_GetDepartment_temp(?)", [null]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Departments fetched succuessfully", data: results});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching department" });
    };
};


export const createDesignation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, designationName, jobGrade, departmentId, description 
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddDesignation(?, ?, ?, ?, ?, ?)",
            [
            id, orgId, designationName, jobGrade, departmentId, description 
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Designation created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating Designation" });
    };
};


export const updateDesignation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, designationName, jobGrade, departmentId, description 
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddDesignation(?, ?, ?, ?, ?, ?)",
            [
            id, orgId, designationName, jobGrade, departmentId, description 
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Designation updated succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in updating Designation" });
    };
};


export const getDesignations = async (req: Request, res: Response) => {
    try {
        const SPcall = await query(
            "CALL SP_GetDesignations(?)", [null]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Designations fetched succuessfully", data: results});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching Designations" });
    };
};

export const getDesignation = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const SPcall = await query(
            "CALL SP_GetDesignations(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Designation fetched succuessfully", data: results});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching Designation" });
    };
};

export const deleteDesignation = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const SPcall = await query(
            "CALL SP_DeleteDesignation(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Designation deleted succuessfully", data: results});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in deleted Designation" });
    };
};


export const createShift = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, shiftName, shiftStartTime, shiftEndTime, gracePeriod, breakDuration 
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddShift(?, ?, ?, ?, ?, ?, ?)",
            [
                id, orgId, shiftName, shiftStartTime, shiftEndTime, gracePeriod, breakDuration  
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Shift created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating Shift" });
    };
};


export const updateShift = async (req: Request, res: Response) => {
    try {
        const {
            id, orgId, shiftName, shiftStartTime, shiftEndTime, gracePeriod, breakDuration  
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddShift(?, ?, ?, ?, ?, ?, ?)",
            [
            id, orgId, shiftName, shiftStartTime, shiftEndTime, gracePeriod, breakDuration  
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Shift updated succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in updating Shift" });
    };
};

export const getShifts = async (req: Request, res: Response) => {
    try {
        const SPcall = await query(
            "CALL SP_GetShifts(?)", [null]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Shifts fetched succuessfully", data: results});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching Shifts" });
    };
};

export const getShift = async (req: Request, res: Response) => {
    try {

        const {id} = req.params
        const SPcall = await query(
            "CALL SP_GetShifts(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Shift fetched succuessfully", data: results});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching Shift" });
    };
};


export const deleteShift = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const SPcall = await query(
            "CALL SP_DeleteShift(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Shift deleted succuessfully", data: results});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in deleted Shift" });
    };
};



export const createHolidayCalender = async (req: Request, res: Response) => {
    try {
        const {
            id , calenderName, calenderYear, locationId
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddHolidayCalendar(?, ?, ?, ?)",
            [
                id , calenderName, calenderYear, locationId
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Holiday Calender created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating Holiday Calender" });
    };
};


export const updateHolidayCalender = async (req: Request, res: Response) => {
    try {
        const {
            id , calenderName, calenderYear, locationId  
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddHolidayCalendar(?, ?, ?, ?)",
            [
            id , calenderName, calenderYear, locationId  
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Holiday Calender updated succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in updating Holiday Calender" });
    };
};


export const getHolidayCalender = async (req: Request, res: Response) => {
    try {
        const {
            id  
        } = req.params;

        const SPcall = await query(
            "CALL SP_GetHolidayCalendars(?)",
            [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Holiday Calender fetched succuessfully", data: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching Holiday Calender" });
    };
};


export const getHolidayCalenders = async (req: Request, res: Response) => {
    try {

        const SPcall = await query(
            "CALL SP_GetHolidayCalendars(?)",
            [null]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Holiday Calenders fetched succuessfully", data: results });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching Holiday Calenders" });
    };
};


export const deleteHolidayCalender = async (req: Request, res: Response) => {
    try {
        const {
            id  
        } = req.params;

        const SPcall = await query(
            "CALL SP_DeleteHolidayCalendar(?)",
            [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Holiday Calender deleted succuessfully", data: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in deleting Holiday Calender" });
    };
};