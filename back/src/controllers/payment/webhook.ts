import {  Request, Response } from "express";



export const paymentWebHook = async ( _req: Request, 
                                       res: Response,
                                    ) => {
            try {
               console.log(_req.query)
               const payment = _req.query;
               if(payment.type === "payment"){
                     
               }
                return res.send("Estamos en espera my king 😒")
            } catch (error) {
               return error;  
            }
 };
 