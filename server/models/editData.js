const mongoose = require("mongoose");

const editDataSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      // required: true,
      trim: true,
      default: "",
    },
  },
  { collection: "editdata" }
);

module.exports = mongoose.model("editdata", editDataSchema);

//required upon refresh causes server to stop due to render on useEffets end upon refresh
