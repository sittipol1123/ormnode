const express = require("express");
const router = express.Router();
const fs = require('fs');
/**
* @swagger
* /images/{name}:
*   get:
*     parameters:
*       - in: path
*         name: name
*         required: true
*         description: Id required
*         schema:
*          type: integer
*     responses:
*       200:
*         description: ok.
*     tags:
*       - images
*/
router.get("/images/:name", (req, res) => {
    const imgname = req.params.name;
    fs.readFile(`./storage/upload/${imgname}`, (err, data) => {
      if (err) throw err;
      res.set('Content-Type', 'image/jpeg');
      res.send(data);
    });
});

module.exports = router;