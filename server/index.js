import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import { register,login } from "./controllers/authController.js";
import { productAdd,productApprove ,getAllProducts} from "./controllers/productAddController.js";
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
app.post('/register',register);
app.post('/login',login);
app.post('/addProduct',productAdd);
app.patch('/approveProduct',productApprove)
app.get('/getAllProducts',getAllProducts)

app.get('/test',(req,res)=>{
    res.status(200).json({message:'Okay'})
})

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