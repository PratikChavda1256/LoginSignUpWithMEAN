import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

//configer env
dotenv.config();

//rest object in express
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//all routes in hear
app.use("/api/v1/auth", authRoutes);

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});

//connect mongodb
connectDb();
