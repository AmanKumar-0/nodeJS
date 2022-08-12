const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const addMensRecord = new MensRanking(req.body);
    const insertRecords = await addMensRecord.save();
    res.status(201).send(insertRecords);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const getRecords = await MensRanking.find({});
    res.status(201).send(getRecords);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getRecordofMen = await MensRanking.findById(_id);
    res.status(201).send(getRecordofMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.put("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateRecordofMen = await MensRanking.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).send(updateRecordofMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getRecordofMen = await MensRanking.findByIdAndDelete(_id);
    res.status(201).send(getRecordofMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
