const { media } = require("../../models");
const upload = require("../healper/fileupload");
const alt = require("../healper/alertapi");
const {fileuploads} = require("../healper/test");

exports.create = async (req, res) => {
  try{
    await fileuploads(req, res);
  }catch(err){
    console.log(err);
  }
  // try {
  //   await upload(req, res);
  //   const file = req.files;
  //   const { fname } = req.body;
  //   for (let i = 0; i < file.length; i++) {
  //     console.log(file[i].filename);
  //     console.log(file[i].size);
  //   }
  //   console.log(fname);
  //   if (req.files.length <= 0) {
  //     return res.send(`You must select at least 1 file.`);
  //   }

  //   return res.send(`Files has been uploaded.`);
  // } catch (error) {
  //   console.log(error);

  //   if (error.code === "LIMIT_UNEXPECTED_FILE") {
  //     return res.send("Too many files to upload.");
  //   }
  //   return res.send(`Error when trying upload many files: ${error}`);
  // }
};

exports.test = (req, res) => {
    return res.json(alt.success({id: '1', name: 'sittipol'}));
}
