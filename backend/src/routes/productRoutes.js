const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
// const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);
router.post(
  "/",
  // auth,
  upload.single("image"),
  productsController.createProduct
);
router.put(
  "/:id",
  // auth,
  upload.single("image"),
  productsController.updateProduct
);
router.patch(
  "/:id",
  // auth,
  upload.single("image"),
  productsController.patchProduct
);
router.delete(
  "/:id",
  // auth,
  productsController.deleteProduct
);

module.exports = router;
