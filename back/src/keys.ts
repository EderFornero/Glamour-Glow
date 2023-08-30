import  "dotenv/config"
const {LOCAL_HOST, DB_NAME} = process.env;
export const mongodb = {
    URI : `mongodb://${LOCAL_HOST}/${DB_NAME}`
}