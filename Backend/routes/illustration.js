import express from "express";
import {
  calculateAndSave,
  getIllustrations,
} from "../controller/illustration.js";
import { verifyToken } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/calculate", verifyToken, calculateAndSave);
router.get("/", verifyToken, getIllustrations);

export default router;
