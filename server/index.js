import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import memoryRouter from "./routers/memoryRouters.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(cors());

// oluşturduğumuz routeların adreslerini belirtiyoruz.
app.use("/memories", memoryRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Database connection is successfully."))
    .catch((err) => console.log(err));
});
