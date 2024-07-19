const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cloudinary = require("../utils/cloudinaryConfig");
const fs = require("fs");

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ data: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newRoomData = req.body;
    let image = newRoomData.image;

    if (req.file) {
      const localFilePath = req.file.path;

      const uploadResult = await cloudinary.uploader.upload(localFilePath, {
        folder: "products",
      });

      image = uploadResult.secure_url;

      fs.unlinkSync(localFilePath);
    }

    const product = await prisma.product.create({
      data: {
        name: newRoomData.name,
        price: parseFloat(newRoomData.price),
        description: newRoomData.description,
        image: image,
      },
    });

    res.status(201).json({ data: product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const localFilePath = req.file ? req.file.path : undefined;

    let image;
    if (localFilePath) {
      const uploadResult = await cloudinary.uploader.upload(localFilePath, {
        folder: "products",
      });
      image = uploadResult.secure_url;
      fs.unlinkSync(localFilePath);
    }

    const data = { name, price: parseFloat(price), description };
    if (image) data.image = image;

    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data,
    });

    res.json({ data: product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const localFilePath = req.file ? req.file.path : undefined;

    let image;
    if (localFilePath) {
      const uploadResult = await cloudinary.uploader.upload(localFilePath, {
        folder: "products",
      });
      image = uploadResult.secure_url;
      fs.unlinkSync(localFilePath);
    }

    const data = {};
    if (name) data.name = name;
    if (price) data.price = parseFloat(price);
    if (description) data.description = description;
    if (image) data.image = image;

    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data,
    });

    res.json({ data: product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
};

// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
// const cloudinary = require("../utils/cloudinaryConfig");
// const fs = require("fs");
// const path = require("path");

// const createProduct = async (req, res) => {
//   try {
//     const newRoomData = req.body;
//     const localFilePath = req.file.path;

//     const uploadResult = await cloudinary.uploader.upload(localFilePath, {
//       folder: "products",
//     });

//     const image = uploadResult.secure_url;

//     fs.unlinkSync(localFilePath);

//     const product = await prisma.product.create({
//       data: {
//         name: newRoomData.name,
//         price: parseFloat(newRoomData.price),
//         description: newRoomData.description,
//         image: image, // Store the Cloudinary image URL
//       },
//     });

//     res.status(201).json({ data: product });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// const updateProduct = async (req, res) => {
//   try {
//     const { name, price, description } = req.body;
//     const localFilePath = req.file ? req.file.path : undefined;

//     let image;
//     if (localFilePath) {
//       const uploadResult = await cloudinary.uploader.upload(localFilePath, {
//         folder: "products",
//       });
//       image = uploadResult.secure_url;
//       fs.unlinkSync(localFilePath);
//     }

//     const data = { name, price: parseFloat(price), description };
//     if (image) data.image = image;

//     const product = await prisma.product.update({
//       where: { id: parseInt(req.params.id) },
//       data,
//     });

//     res.json({ data: product });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// const patchProduct = async (req, res) => {
//   try {
//     const { name, price, description } = req.body;
//     const localFilePath = req.file ? req.file.path : undefined;

//     let image;
//     if (localFilePath) {
//       const uploadResult = await cloudinary.uploader.upload(localFilePath, {
//         folder: "products",
//       });
//       image = uploadResult.secure_url;
//       fs.unlinkSync(localFilePath);
//     }

//     const data = {};
//     if (name) data.name = name;
//     if (price) data.price = parseFloat(price);
//     if (description) data.description = description;
//     if (image) data.image = image;

//     const product = await prisma.product.update({
//       where: { id: parseInt(req.params.id) },
//       data,
//     });

//     res.json({ data: product });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
