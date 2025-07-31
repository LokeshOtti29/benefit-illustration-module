import express from "express";
import {
  calculateAndSave,
  getIllustrations,
} from "../controller/illustration.js";

const router = express.Router();

router.post("/calculate", calculateAndSave);
router.get("/", getIllustrations);

export default router;
