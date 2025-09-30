import { v2 as cloudinary } from "cloudinary";
import { Image } from "../models/user.js";

const uploadImage = async (req, res) => {
  try {
    const imageUpload = await cloudinary.uploader.upload(req.file?.path)

    const imageInfo = {
      name: imageUpload.original_filename,
      public_url:imageUpload.url,
      secure_url:imageUpload.secure_url,
    }
    const imageDetails = new Image(imageInfo);
    await imageDetails.validate();
    const record = imageDetails.save()

    console.log('imageUpload', imageUpload);
    console.log('imageDetails', record);
    res.send('Hello, World!');

  } catch (error) {
    console.log(error);
    res.send(error)
  }
}
export default uploadImage; 
