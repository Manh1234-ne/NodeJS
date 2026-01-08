import express from "express";
import cors from "cors";

const app = express();
app.use(cors());


// app.get("/", () => {
//     console.log("Home page");
// });

// app.get("/greet", (req, res) => {
//     const name = req.query.name || "Bạn";
//     res.json({ message: `Xin chao, ${name}!` });
// })

// app.get("/sum", (req, res) => {
//     const a = parseInt(req.query.a, 10) || 0;
//     const b = parseInt(req.query.b, 10) || 0;
//     res.json({ sum: a + b });
// })


const products = [
    { id: 1, name: "Sản phẩm 1", price: 100 },
    { id: 2, name: "Sản phẩm 2", price: 200 },
    { id: 3, name: "Sản phẩm 3", price: 300 },
]
// Trả về danh sách sản phẩm
app.get("/products/", (req, res) => {
    return res.json(products);
})
// Trả về chi tiết sản phẩm theo id
app.get("/products/:id", (req, res) => {
    const product = products.find((product) => product.id == req.params.id);
    if(!product) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    return res.json(product);
})
// Xóa sản phẩm
app.delete("/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    products.splice(index, 1);
    res.json({ message: "Đã xóa xong" });
});








app.listen(3000, () => {
    console.log("Server đang chạy cổng 3000");
});
