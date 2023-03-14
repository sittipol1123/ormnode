const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/auth/authen");
const { verifytoken } = require("../middleware/authmiddleware");
const news = require("../controller/admin/NewsController");
const users = require("../controller/admin/userController");
const media = require("../controller/admin/MediaController");

router.post("/login", login);

// router.use(verifytoken);
router.post("/users", register);
router.get("/protectedRoute", (req, res) => {
  res.send("This is a protected route");
});

// news route

/**
 * @swagger
 * /news:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *     tags:
 *       - news
 * /news/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id required
 *         schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: ok.
 *     tags:
 *       - news
 */
/**
 * @swagger
 * /news/{id}:
 *   put:
 *     responses:
 *       200:
 *         description: ok.
 *     tags:
 *       - news
 */
/**
 * @swagger
 * /news/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id required
 *         schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: ok.
 *     tags:
 *       - news
 */
/**
 * @swagger
 * /news:
 *   post:
 *     responses:
 *       200:
 *         description: ok.
 *     tags:
 *       - news
 */
router.get("/news", news.index);
router.post("/news", news.create);
router.get("/news/:id", news.find);
router.put("/news/:id", news.update);
router.delete("/news/:id", news.destroy);

// user route
/**
 * @swagger
 * /users:
 *   get:
 *     description: fetch all user in db
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *     tags:
 *       - users
 */
router.get("/users", users.index);

// media route
router.post("/upload", media.create);
router.get("/upload", media.test);

module.exports = router;
