const express = require("express");
const { createTable, find, findOne, insert } = require("./data");
const router = express.Router();

router.post("/createTable", async (req, res) => {
  await createTable();

  res.send("done");
});

router.post("/createUser", async (req, res) => {
    const {name, email, age,rollNo} = req.body
    const dbRes = await insert(name, email, age,rollNo);

    return res.json(dbRes)
});

router.get("/getUsers", async (req, res) => {
  try {
    const user = await find();
    
    return res.json(user);
    
  } catch (error) {
    console.log(error);
  }
});
router.get("/getUser", (req, res) => {});

module.exports = router;
