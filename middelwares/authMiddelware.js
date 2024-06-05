import JWT from "jsonwebtoken";
// import userModel from "../models/usermodel.js";
import userModel from "../models/userModel.js";

//protected routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const token = await req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization token not provided",
      });
    }
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
