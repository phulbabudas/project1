const sql = require("./db")



const createTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      age INTEGER,
      rollNo INTEGER
    )
  `;
}
const insert = async (name, email, age,rollNo) => {
  const user = await sql`
    INSERT INTO users (name, email, age,rollNo)
    VALUES (${name}, ${email}, ${age},${rollNo})
    RETURNING *;
  `;

  return user
}

const find = async () => {
  const users = await sql`SELECT * FROM users`;
  console.log(users);
  return users;
}

const findOne = async (id) => {
   const user = await sql`SELECT * FROM users WHERE id = ${id}`;
   console.log(user[0]);
   return user[0];
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
  findOne
}
