import express from "express";
import cors from "cors";
import router from "./routers/index.js";
import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());

// kết nối mongodb
mongoose.connect("mongodb://localhost:27017/WD20306")
    .then(() => console.log("Kết nối MongoDB thành công"))
    .catch((error) => console.log("Kết nối MongoDB thất bại", error));

// khai báo router
app.use("/api/", router);

// khởi tạo server cổng 3000
app.listen(3000, () => {
    console.log("Server đang chạy cổng 3000");
});