const express = require("express");

const router = express.Router();

const Job = require("../models/job.model");

router.post("", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(201).send({ message: "Job created successfully", job });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("", async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.status(200).send(jobs);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send({ message: "Job updated successfully", job });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    return res.status(201).send({ message: "Job deleted successfully" });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
