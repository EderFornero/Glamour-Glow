import {  Request, Response } from "express";
import mercadopago from "mercadopago";



const TOKEN: string =  "TEST-1804449312324495-090605-fb86103bee1a2ca5427dd9b4cc0965f3-1472015382"
export const paymentOrder = async ( _req: Request, 
                                      res: Response,
                                   ) => {
            
            mercadopago.configure({access_token: TOKEN })
            try {
              const result = await  mercadopago.preferences.create({
                    items: [{
                        title: _req.body.title,
                        unit_price: _req.body.unit_price,
                        currency_id: _req.body.currency_id,
                        quantity: _req.body.quantity,
                    }],
                    
                    back_urls: {
                        success: "http://localhost:3001/payment/sucess",
                        failure: "http://localhost:3001/payment/failure",
                        pending: "http://localhost:3001/payment/pending"

                    },
                    notification_url: "https://0237-2806-2f0-5520-9e39-3814-99bb-63f6-c301.ngrok.io/webhook"
                    
                })
                console.log(result);
                return res.json(result.body.id);
            } catch (error) {
               return error;  
            }
 }