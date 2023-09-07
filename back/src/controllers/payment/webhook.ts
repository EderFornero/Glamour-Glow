import {  Request, Response } from "express";
<<<<<<< HEAD
=======
// import mercadopago from "mercadopago";

>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10


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
 