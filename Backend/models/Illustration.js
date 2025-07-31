import mongoose from "mongoose";

const illustrationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dob: String,
    gender: String,
    sumAssured: Number,
    premium: Number,
    frequency: String,
    pt: Number,
    ppt: Number,
    tableData: [
      {
        year: Number,
        premiumPaid: Number,
        bonusRate: Number,
        benefits: Number,
        bonus: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Illustration", illustrationSchema);
