import { Router } from "express";
import { createOne, deleteOne, getAll, getOne, updateOne } from "../controllers/product.controller.js";

const productRouter = Router();

// trả về danh sách sản phẩm
productRouter.get("/", getAll);
productRouter.get("/:id", getOne);
productRouter.post("/", createOne);
productRouter.put("/:id", updateOne);
productRouter.delete("/:id", deleteOne);

// /products

export default productRouter;