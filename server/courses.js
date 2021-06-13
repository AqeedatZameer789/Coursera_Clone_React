const mongoose = require("mongoose");
const schema = mongoose.Schema;
const courses_schema = new schema({
    id : { type: String, required: true },
    imgsrc : { type: String, required: true },
    heading: { type: String, required: true },
    paragraph: { type: String },
    btn: { type: String, required: true },
    span1: { type: String, required: true },
    span2: { type: String, required: true },
    span3: { type: String, required: true },
    span4: { type: String, required: true },
    imgsrc_span: { type: String, required: true },
    level_img:{ type: String, required: true },
    level_text:{ type: String, required: true },
    imgstar1:{ type: String, required: true },
    imgstar2:{ type: String, required: true },
    imgstar3:{ type: String, required: true },
    imgstar4:{ type: String, required: true },
    imgstar5:{ type: String, required: true },
});
const Course_Model = mongoose.model("courses", courses_schema);
module.exports.Course_Model = Course_Model;
