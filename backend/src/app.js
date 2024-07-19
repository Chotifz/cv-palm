const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

const productRoutes = require("./routes/productRoutes");

dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To My API");
});

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`app running on port: http://localhost:${PORT}`);
});
