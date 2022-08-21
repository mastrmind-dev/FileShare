import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import File from "../models/FilesModel";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "We need the file" });
    } else {
      console.log("Received File=>");
      console.log(req.file);
      let uploadedFile: UploadApiResponse;
      try {
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
          folder: "userfiles",
          resource_type: "auto",
        });
      } catch (error) {
        console.log("Cloudinary Error=>");
        console.log(error);
        return res.status(400).json({ message: "Cloudinary Error!" }); //no matter what, always return res, rej. Reason=>if this error is not returned it will be ignored and below lines will be executed. But if we return it, the error message will be returned from the function.
      }
      console.log("Uploaded File=>");
      console.log(uploadedFile);
      const { originalname } = req.file;
      const { secure_url, bytes, format } = uploadedFile;

      const file = await File.create({
        file_name: originalname,
        size_in_bytes: bytes,
        secure_url,
        format,
      });
      console.log("Created File in MongoDB=>");
      console.log(file);
      return res.status(200).json(file);
    }
  } catch (error) {
    console.log("error message");
    console.log(error.message);
    return res.status(500).json({ message: "server error" });
  }
};
