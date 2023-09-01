import { ServicesModel } from "../models";


export const readServices = async() => {
    
    try {
      const allServices = await ServicesModel.find({})
      return allServices
    } catch (error) {
      return error
    }
}

export const readServiceById = async(id:any) => {
  try {
    const service = await ServicesModel.findById(id).exec();
    return service
  } catch (error) {
    return error
  }
}

export const createService = async (data : any) => {

    try {
     const newService = await ServicesModel.create(data)
     return newService
    } catch (error) {
      throw new Error
    }
}

export const updateService = async (id : any, update: any) => {

  try {
    const serviceUpdate = await ServicesModel.findByIdAndUpdate(id, update,{
      new : true
    })
    return serviceUpdate
  } catch (error) {
    return error
  }
}

export const destroyService = async (id:any) => {

  try {
    await ServicesModel.findByIdAndDelete(id)
    return "succesfuly"
  } catch (error) {
    return error
  }
}