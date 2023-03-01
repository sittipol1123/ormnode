const express = require("express");
const cors = require("cors");
const { sequelize, User, Post } = require("./models");
const { index, fineuser } = require("./src/route/admin/usersroute");
// const { verifytoken } = require("./middleware/authmiddleware");
const router = require("./route/admin");
const clientrouter = require("./route/client");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
// app.get('/test', getuser);
app.use(clientrouter);
app.use(router);
// app.post('/users', async(req, res) => {
//     const {name, email, role} = req.body;
//     console.log(req.body);
//     try {
//         const user = await User.create({name, email, role});
//         return res.json(user);
//     }catch(err){
//         console.log(err);
//         return res.status(500).json(err);
//     }
// });
// app.post("/welcome", verifytoken, (req, res) => {
//     res.status(200).send("Welcome 🙌 ");
// });
// app.use(verifytoken);

// app.post('/login', login);
// app.post('/users', register);

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.findAll();
//         return res.json(users);
//     }catch(err){
//         console.log(err);
//         return res.status(500).json({error: 'somthing went wrong'});
//     }
// });
// app.get('/users', index);
// app.get('/users/:uuid', fineuser);

// app.get('/users/:uuid', async (req, res) => {
//     const uuid = req.params.uuid;
//     try {
//         const users = await User.findOne({
//             where: {uuid},
//             include: 'posts',
//         });
//         return res.json(users);
//     }catch(err){
//         console.log(err);
//         return res.status(500).json({error: 'somthing went wrong'});
//     }
// });

app.delete("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const users = await User.findOne({ where: { uuid } });
    await users.destroy();
    return res.json({ message: "user deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "somthing went wrong" });
  }
});

app.put("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const users = await User.findOne({ where: { uuid } });
    users.name = name;
    users.email = email;
    users.role = role;

    await users.save();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "somthing went wrong" });
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server Start on port 5000");
  // await sequelize.authenticate();
  await sequelize.sync();
  console.log("database connected!!");
});
