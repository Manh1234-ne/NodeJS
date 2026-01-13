import Product from "../models/product.model.js";


// Lấy danh sách
export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        return res.status(500).json({ message:"Lỗi khi lấy danh sách sản phẩm", error: error.message });
    }
};
// trả về 1 sản phẩm
export const getOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Khoong tim thay san pham",
            });
        }
        return res.json(product);
    } catch (error) {
        return res.status(500).json({ message:"Lỗi khi lấy sản phẩm", error: error.message });
    }
};
// Thêm sản phẩm
export const createOne = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({ message:"Lỗi khi thêm", error: error.message });
    }
};
// Xóa sản phẩm
export const deleteOne = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
        })
    } catch (error) {
        return res.status(500).json({ message: "Lỗi khi xóa",
            error: error.message 
            });
    }
};
// cập nhật sản phẩm
export const updateOne = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    } catch (error) {
        return res.status(500).json({ message: "Lỗi khi cập nhật",
            error: error.message 
            });
    }
};  
 // 