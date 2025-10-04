import { v2 as cloudinary } from "cloudinary";
import { Product } from "../models/product.js";

const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    let imagePath = req.file?.path;
    let url;
    let image_id;
    if (imagePath) {
      const uploadImage = await cloudinary.uploader.upload(imagePath);
      url = uploadImage.secure_url;
      image_id = uploadImage.public_id;
    }
    const product = new Product({
      name,
      price,
      description,
      image: url,
      image_id,
    });
    await product.validate();
    const response = await product.save();

    res.send({
      message: "Product Create Successfully",
      response,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
};

const GetAllProduct = async (_, res) => {
  try {
    const AllProduct = await Product.find({});
    res.send({
      Data: AllProduct,
      Message: "All Product",
    });
  } catch (error) {
    res.send({
      error,
      Message: "Error in Fetching Product",
    });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const { id } = req?.query;
    const FindProduct = await Product.findOne({ _id: id });
    if (!FindProduct) {
      return res.send({
        Message: "Invalid Id",
      });
    }
    await cloudinary.uploader.destroy(FindProduct.image_id);
    await Product.findByIdAndDelete({ id });
    res.send({
      Message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.send({
      Message: `Can't Delete Product because of ${error}`,
    });
  }
};

const UpdateProduct = async (res, req) => {
  try {
    const { name, price, description, id } = req.body;
    let imagePath = req.file?.path;
    let url;
    let image_id;
    const findImage = await Product.findOne({ id: id });
    if (findImage.image_id) {
      await cloudinary.uploader.destroy(findImage.image_id);
      if (imagePath) {
        const uploadImage = await cloudinary.uploader.upload(imagePath);
        url = uploadImage?.secure_url;
        image_id = uploadImage?.public_id;
      }
    }
    const product = {
      name,
      price,
      description,
    };
    if (image_id) {
      (product.url = url), (product.image_id = image_id);
    }
    const UpdatedProduct = await Product.findByIdAndUpdate({ id, product });
    res.send({
      message: "Record Updated Successfully",
      NewProduct: UpdatedProduct,
    });
  } catch (error) {
    res.send({
      Message: `Can't Delete Product because of ${error}`,
    });
  }
};

export { createProduct, GetAllProduct, DeleteProduct, UpdateProduct };
