import {  Request, Response } from "express";


export const paymentFailure = async ( _req: Request, 
    res: Response,
 ) => {
try {
return res.send("La transaccion no pudo completarse  my king 😢")
} catch (error) {
return error;  
}
};

