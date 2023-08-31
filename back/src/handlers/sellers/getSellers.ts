import { getSellersController } from "../../controllers/index"


export const getSellersHandler =  () => {
    const allSellers = getSellersController();
    return allSellers;

}