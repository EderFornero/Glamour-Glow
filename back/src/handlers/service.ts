import { SellerModel, ServicesModel } from "../models";

export const readServices = async () => {
  const allServices = await ServicesModel.find({})
    .populate("seller", {
      _id: 0,
      sellerName: 1,
    })
    .populate("serviceCategories", {
      _id: 0,
      name: 1,
    });
  return allServices;
};

export const readServiceById = async (id: string) => {
  const service = await ServicesModel.findById(id)
    .populate("seller", { _id: 0, sellerName: 1 })
    .exec();
  return service;
};

export const createService = async (service: Object) => {
  const newService = await ServicesModel.create(service);
  await SellerModel.findOneAndUpdate({_id : newService.seller}, {"$push": {servicesArray: newService}})
  return newService;
};

export const updateService = async (id: string, update: Object) => {
  const serviceUpdate = await ServicesModel.findByIdAndUpdate(id, update, {
    new: true,
  });
  return serviceUpdate;
};

export const destroyService = async (id: string) => {
  const deleteService = await ServicesModel.findByIdAndDelete(id);
  await SellerModel.findOneAndUpdate({_id : deleteService?.seller}, {"$pull": {servicesArray: id}})
  return id;
};
