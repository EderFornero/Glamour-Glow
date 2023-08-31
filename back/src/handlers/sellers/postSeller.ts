import { postSellerController } from "../../controllers/index";


export const postSellersHandler =  () => { 
    const allSellers = postSellerController();
    return allSellers;

     }
