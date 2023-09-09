import { Request, Response } from 'express'
import mercadopago from 'mercadopago'

const TOKEN: string = 'TEST-2898003763829382-090613-f7cb3a0c9300b6e7e4d95dca00c8290a-1471102681'
export const paymentOrder = async (req: Request, res: Response) => {
  mercadopago.configure({ access_token: TOKEN })
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
        success: `http://localhost:5173/sellerdetail/${req.body.sellerId}`,
        failure: `http://localhost:5173/sellerdetail/${req.body.sellerId}`,
        pending: ''
      },
      auto_return: 'approved',
      notification_url: 'https://2876-191-97-30-250.ngrok.io/webhook'
    })
    console.log(result)
    return res.status(200).json(result.body.init_point)
  } catch (error) {
    return res.status(500).json({ error: 'Hubo un error' })
  }
}
