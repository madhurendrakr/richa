import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {
  register,
  login,
  getAllUsers,
  makeAdmin,
  getEmailAndPhoneByProductId,
} from "./controllers/authController.js";
import {
  productAdd,
  productApprove,
  getAllProducts,
  getProduct,
  getProductByUser,
  changeApprovalStatus,
  deleteProduct,
} from "./controllers/productAddController.js";
import { mailSender } from "./controllers/mailController.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", register);
app.post("/login", login);
app.post("/getEmailAndPhoneById", getEmailAndPhoneByProductId);
app.post("/addProduct", productAdd);
app.post("/getProduct", getProduct);
app.patch("/approveProduct", productApprove);
app.get("/getAllProducts", getAllProducts);
app.get("/getAllUsers", getAllUsers);
app.post("/getProductByUser", getProductByUser);
app.post("/deleteProductById", deleteProduct);
app.post("/changeAdminStatus", makeAdmin);
app.post("/changeApprovalStatus", changeApprovalStatus);

app.post("/sendMail", mailSender);

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Okay" });
});

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    app.listen(3000, () => {
      console.log("Chal Raha hai");
    });
  })
  .catch((err) => {
    console.log("Server Meowed");
  });
