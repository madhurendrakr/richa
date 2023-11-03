import { Product } from "../models/productModel.js";


export const productAdd = async (req, res) => {
  if (req.method !== "POST")
    return res.status(400).json({ error: "Bad Request" });

  const { name, description, price, category, image, addedBy } = req.body;

  const newProduct = await Product.create({
    name,
    description,
    price,
    category,
    image,
    addedBy,
  });
  return res.status(200).json({ message: "Product Added", data: newProduct });
};

export const productApprove = async (req, res) => {
    const { id } = req.body;
    
    try {
      const exProduct = await Product.findOne({ _id: id });
  
      if (exProduct === null) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      exProduct.isApproved = true;
      await exProduct.save(); 
  
      return res.status(200).json({ message: "Product approved", data: exProduct });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const getAllProducts = async(req,res)=>{
    try {
      const allProducts = await Product.find();
      return res.status(200).json({data:allProducts})
    } catch (error) {
      return res.status(404).json({error:"Products Not Found"});
    }
    
  }

  export const getProductByUser = async(req,res)=>{
    try {
      const {id} = req.body;
      const product = await Product.find({addedBy:id});
      if(!product)return res.status(400).json({error:"Not Found"})
      return res.status(200).json({data:product})
    } catch (error) {
      res.status(400).json({error:"Not Found"})
    }
  }

  export const getProduct = async(req,res)=>{
    try {
      const {id} = req.body
      const product = await Product.findById(id);
      if(!product) return res.status(404).json({error:"Product Not Found"});
      return res.status(200).json({product})
    } catch (error) {
      return res.status(404).json({error:"Product not found"})
    }
  }
  
