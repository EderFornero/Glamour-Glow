import { ServicesModel } from "../models";


export const readServices = async() => {
    
    const allServices = await ServicesModel.find({})
    return allServices
}

export const createService = async (data : any) => {

  const newService = await ServicesModel.create(data)
  return newService

}