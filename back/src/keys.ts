import "dotenv/config"
const {URL} = process.env

export const mongodb = {
    URI : `${URL}`
}