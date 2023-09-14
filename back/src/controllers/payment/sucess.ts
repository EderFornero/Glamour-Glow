import {  Request, Response } from "express";



export const paymentSucessorder = async ( _req: Request, 
                                           res: Response,
                                        ) => {
            try {
                return res.send(" order SUCESS my king :**")
            } catch (error) {
               return error;  
            }
 };
 