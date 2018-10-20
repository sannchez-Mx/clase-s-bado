const multer =require("multer");
const cloudinary = require("cloudinary");
const cloudinaryS = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = cloudinaryS({
  cloudinary,
  folder: "subastas",
  allowedFormats: ["jpg", "png", "gif"]
});

module.exports = multer({storage});
