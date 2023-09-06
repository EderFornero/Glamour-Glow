import {  Request, Response } from "express";


export const paymentPending = async ( _req: Request, 
    res: Response,
 ) => {
try {
return res.send("La transaccion esta en espera my king :**")
} catch (error) {
return error;  
}
};

