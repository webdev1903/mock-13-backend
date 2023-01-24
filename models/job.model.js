const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company_name: { type: String, required: true },
    position: { type: String, required: true },
    contract: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("job", jobSchema);
