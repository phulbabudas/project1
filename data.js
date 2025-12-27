const sql = require("./db")

const createTable = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        age INTEGER,
        rollNo INTEGER
      )
    `;
    console.log("Table created successfully");
  } catch (error) {
    console.error("Error creating table:", error.message);
    throw error;
  }
}
const insert = async (name, email, age,rollNo) => {
  try {
    const user = await sql`
      INSERT INTO users (name, email, age,rollNo)
      VALUES (${name}, ${email}, ${age},${rollNo})
      RETURNING *;
    `;
    return user;
  } catch (error) {
    console.error("Error inserting user:", error.message);
    throw error;
  }
}

const find = async () => {
  try {
    const users = await sql`SELECT * FROM users`;
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
}

const findOne = async (id) => {
  try {
    const user = await sql`SELECT * FROM users WHERE id = ${id}`;
    console.log(user[0]);
    return user[0];
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error;
  }
}
const deleteUser = async (id) => {
  try {
    const user = await sql`DELETE FROM users WHERE id = ${id}`;
    console.log(user);
    return user;
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
}


// const users = [
//   {
//     name: "Rohit",
//     age: 27,
//     gender: "M",
//     email: "rohit@example.com",
//     city: "Patna",
//   },
//   {
//     name: "Alice",
//     age: 20,
//     gender: "M",
//     email: "alice@example.com",
//     city: "Samastipur",
//   },
// ];

module.exports = {
  createTable,
  insert,
  find,
  findOne,
  deleteUser
}
