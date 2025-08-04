import { NextFunction, Request, Response } from 'express';
import { query } from '../db';


export const createOrganisation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgName, orgCode, logo, country, language, currency, gst_vat_number, website
        } = req.body;

        console.log(req.body);
        const SPcall = await query(
            "CALL SP_AddOrganization(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                id, orgName, orgCode, logo, country, language, currency, gst_vat_number, website
            ]
        );

        const results = SPcall.rows[0];
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
            "CALL SP_AddOrganization()"
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Organisation created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating organisation" });
    };
};

export const getOrganisation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const SPcall = await query(
            "CALL SP_AddOrganization(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Organisation created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating organisation" });
    };
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
            "CALL SP_AddOrganization()"
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal Entities fetched succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in fetching legal entities" });
    };
};

export const getLegalEntity = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const SPcall = await query(
            "CALL SP_AddOrganization(?)", [id]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Legal entity fetched succuessfully", data: results[0]?.[0] });
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