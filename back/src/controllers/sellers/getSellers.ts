import { getSellersController } from "../../handlers/index"


export const getSellersHandler =  () => {
    const allSellers = getSellersController();
    return allSellers;

}