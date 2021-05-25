import express from "express";
import mongoose from "mongoose";

import Memory from "../database/memoryModel.js";

const router = express.Router();

// get all memories from db using GET method

router.get("/", async (req, res) => {
  try {
    // wait for all data for Memory db
    const memories = await Memory.find();

    res.status(200).json(memories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get single memories from db using GET method

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Memory id is not valid" });

    const memory = await Memory.findById(id);
    if (!memory) return;
    res.status(200).json(memory);
  } catch (error) {
    res.status(404).json({ message: "Memory not found" });
  }
});

// create a memory using POST method.

router.post("/", async (req, res) => {
  try {
    const memory = req.body;

    const createdMemory = await Memory.create(memory);

    res.status(201).json(createdMemory);
  } catch (error) {
    console.log(error.message);
    res.json({ message: "Post error" });
  }
});

// Update a memory using PUT method.

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Memory id is not valid" });

    const { title, content, creator, image } = req.body;
    const updatedMemory = await Memory.findByIdAndUpdate(
      id,
      { title, content, creator, image, _id: id },
      { new: true }
    );

    res.status(202).json(updatedMemory);
  } catch (error) {
    res.json({ message: "update a memory" });
  }
});

// Remove a memory using DELETE method.

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "Memory id is not valid" });

    await Memory.findByIdAndDelete(id);

    res.status(202).json({ message: "Memory has been deleted" });
  } catch (error) {
    res.json({ message: "delete a memory" });
  }
});

export default router;
