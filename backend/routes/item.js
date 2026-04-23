const express = require("express");
const Item = require("../models/Item");
const auth = require("../middleware/auth");

const router = express.Router();

// CREATE ITEM
router.post("/items", auth, async (req, res) => {
  const item = new Item({
    userId: req.user.id,
    ...req.body
  });

  await item.save();
  res.json(item);
});

// GET ALL ITEMS
router.get("/items", auth, async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

module.exports = router;