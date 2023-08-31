import { postSellerController } from "../../handlers/index";


export const postSellersHandler =  () => { 
    const allSellers = postSellerController();
    return allSellers;

     }
