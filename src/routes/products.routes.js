import { Router } from "express";
import{createProducts,deleteProducts,getProduct,getProducts,updateProducts,getProductsCategory}from "../controllers/products.controller.js";

const router = Router();

router.get("/listProducts", getProducts)
router.get("/listProductsCategory/:id", getProductsCategory)
router.post("/createProducts", createProducts)
router.get("/listProduct/:id",getProduct)
router.delete("/deleteProducts/:id", deleteProducts)
router.put("/updateProducts/:id", updateProducts)

export default router;