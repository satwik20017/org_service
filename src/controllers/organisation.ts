import { NextFunction, Request, Response } from 'express';
import { query } from '../db';
import { APIDataResponse, APIResponse } from '../common';


export const createOrganisation = async (req: Request, res: Response) => {
    try {
        const {
            id, orgName, orgCode, logo, country, language, currency, gst_vat_number, website
        } = req.body;
        const queryparams = [
            id, orgName, orgCode, logo, country, language, currency, gst_vat_number, website
        ]

        console.log(queryparams);
        const SPcall = await query(
            "CALL SP_AddOrganization(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            queryparams
        );

        const results = SPcall.rows[0][0];
        return res.send(results)
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

        const results = SPcall.rows[0][0];
        return res.send(APIDataResponse(results.sts, results.msg, results))
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
            id, groupName, entityName, entityType, country, pan_vat_number, activeEntity
        } = req.body;

        const SPcall = await query(
            "CALL SP_AddLegalEntity(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                id, groupName, entityName, entityType, country, pan_vat_number, activeEntity
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Organisation created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating organisation" });
    };
};

export const updateEntity = async (req: Request, res: Response) => {
    try {
        const {
            groupName, entityName, entityType, country, pan_vat_number, activeEntity
        } = req.body;
        const { id } = req.params;

        const SPcall = await query(
            "CALL SP_AddLegalEntity(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                groupName, entityName, entityType, country, pan_vat_number, activeEntity, id
            ]
        );

        const results = SPcall.rows[0];
        res.status(201).json({ status: 200, message: "Organisation created succuessfully", data: results[0]?.[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Error in creating organisation" });
    };
};

export const getLegalEntities = async (req: Request, res: Response) => {
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

export const getLegalEntity = async (req: Request, res: Response) => {
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