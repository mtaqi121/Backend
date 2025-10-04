import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  course: {
    type: String,
    required: [true, "Please enter name"],
  },
 instructor: {
  type:String,
  required: [true, "Please enter Instructor name"],
 }
});

const Course = mongoose.model("Course", CourseSchema);
export default Course;
