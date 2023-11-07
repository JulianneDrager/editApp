const mongoose = require("mongoose");
const editData = require("../models/editData");
const EditData = mongoose.model("editdata");

// get all
exports.getData = async (req, res) => {
  const data = await EditData.find(req.query);
  res.json(data);
};

//create post
//NOTE: propertys MUST be ALL lowercase
//NOTE: moongoose updated - no longer excepts callback - change to promise as below
exports.postData = async (req, res) => {
  try {
    const EditDt = await new EditData({
      data: req.body.data,
    });
    EditDt.save().then((result) => {
      console.log("result", EditDt);
      res.status(200).json({
        message: "Created" + result + " successfuly!",
        result,
      });
      console.log("TEST", result.data);
      // result.data === "" ? EditDt.deleteOne({ editdata: "" }) : result;
    });
  } catch (err) {
    console.log("data", err);
    res.status(500).json({
      message: "error data was not created",
    });
  }
};

//get post by id
//NOTE: removed await - caused error in cloned query (in updated mongdb version)
exports.getEditId = async (req, res) => {
  try {
    const getUniqueId = await req.params.editId;
    EditData.findById({ _id: getUniqueId }).then((result) => {
      console.log("result", result);
      res.status(200).json({
        message: getUniqueId + " Post found",
        result,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "Profile not found",
    });
  }
};

//update event(title)
//NOTE: make sure on Postman you select JSON not text
//http://localhost:3001/update/637d99b47f1c7878ad6f8679
//NOTE: com
exports.updatePost = async (req, res) => {
  try {
    await EditData.findOneAndUpdate(
      { _id: req.params.editId },
      { $set: req.body },
      { new: true }
    ).then((result) => {
      console.log("result", result);
      res.status(200).json({
        message: "Post Updated",
        result,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "error data was not updated",
    });
  }
};

//delete post
//NOTE: moongoose updated - no longer excepts callback - change to promise as below
exports.deletePost = async (req, res) => {
  try {
    const infoID = await req.params.editId;
    EditData.deleteOne({ _id: infoID }).then((result) => {
      console.log("result", result);
      res.status(200).json({
        message: infoID + " Post id deleted.",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "error data was not deleted",
    });
  }
};
