import { Request, Response } from 'express'
import mercadopago from 'mercadopago'
import dotenv from 'dotenv'
dotenv.config()

const MERCADOPAGO_TOKEN: string = process.env.MERCADOPAGO_TOKEN || ''
const FRONT_URL: string = process.env.FRONT_URL || ''

export const paymentOrder = async (req: Request, res: Response) => {
  mercadopago.configure({ access_token: MERCADOPAGO_TOKEN })
  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: req.body.title,
          unit_price: Number(req.body.unit_price),
          currency_id: req.body.currency_id,
          quantity: Number(req.body.quantity)
        }
      ],

      back_urls: {
        success: `${FRONT_URL}/${req.body.sellerId}/?productName=${req.body.title}&productPrice=${req.body.unit_price}`,
        failure: `${FRONT_URL}/${req.body.sellerId}`,
        pending: ''
      },
      auto_return: 'approved',
      notification_url: 'https://2876-191-97-30-250.ngrok.io/webhook'
    })
    return res.status(200).json(result.body.init_point)
  } catch (error) {
    return res.status(500).json({ error: 'Hubo un error' })
  }
}
