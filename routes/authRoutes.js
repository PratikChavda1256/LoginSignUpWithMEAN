import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//REGISTER || this method is post
router.post("/register", registerController);

//LOGIN || this method is post
router.post("/login", loginController);

export default router;
