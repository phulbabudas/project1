const express = require("express");
const { createTable, find, findOne, insert, deleteUser } = require("./data");
const router = express.Router();
router.delete("/deleteTable", async (req, res) => {
  try {
    await deleteUser();
    res.send("deleteTable");
  } catch (error) {
    console.error("Error in deleteTable route:", error.message);
    res.status(500).json({ error: "Failed to delete table", message: error.message });
  }
});
router.post("/createTable", async (req, res) => {
  try {
    await createTable();
    res.send("Table created successfully");
  } catch (error) {
    console.error("Error in createTable route:", error.message);
    res.status(500).json({ error: "Failed to create table", message: error.message });
  }
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
router.get("/getUser/:id", async (req, res) => {
  const {id} = req.params;
  console.log(id);

  const user = await findOne(id);

  return res.json(user);
});
router.delete("/deleteUser/:id",async (req,res) =>{
  const {id} = req.params;
  const user = await deleteUser(id);
  return res.json(user);
});
module.exports = router;
