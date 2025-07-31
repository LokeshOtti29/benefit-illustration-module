import express from "express";
import { login, register } from "../controller/authcontroller.js";
import { verifyToken } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", verifyToken, (req, res) => {
  res.status(200).json({ message: "Authenticated" });
});

export default router;
