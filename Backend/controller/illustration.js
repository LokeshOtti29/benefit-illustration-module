import Illustration from "../models/Illustration.js";
import jwt from "jsonwebtoken";

export const calculateAndSave = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { dob, gender, sumAssured, premium, frequency, pt, ppt } = req.body;

    const tableData = [];
    for (let year = 1; year <= pt; year++) {
      const premiumPaid = year <= ppt ? premium : 0;
      const bonus = Math.round(sumAssured * 0.02 * year);
      const benefits = sumAssured + bonus;
      tableData.push({ year, premiumPaid, bonus, benefits });
    }

    const newIllustration = new Illustration({
      userId,
      dob,
      gender,
      sumAssured,
      premium,
      frequency,
      pt,
      ppt,
      tableData,
    });

    await newIllustration.save();

    res.status(201).json({
      message: "Illustration saved",
      illustration: newIllustration,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getIllustrations = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const illustrations = await Illustration.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({ illustrations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch illustration data" });
  }
};
