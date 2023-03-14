const upload = require("./fileupload");
const { media } = require("../../models");

exports.fileuploads = async (req, res) => {
  try {
    await upload(req, res);
    const file = req.files;
    const { relation_id, relation_name, table_name } = req.body;
    for (let i = 0; i < file.length; i++) {
      await addtodb(
        file[i].filename,
        file[i].size,
        relation_id,
        relation_name,
        table_name
      );
    }

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }

    return res.send(`Files has been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};

const addtodb = async (filename, filesize, relid, relname, tbname) => {
  try {
    const model = await new media();
    model.filename = filename;
    model.filesize = filesize;
    model.relation_name = relname;
    model.relation_id = relid;
    model.table_name = tbname;
    await model.save();
  } catch (err) {
    console.log(err);
  }
};
