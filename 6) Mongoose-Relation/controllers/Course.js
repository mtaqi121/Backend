import Course from "../models/Course.js";

const createCourse = async (req, res) => {
  try {
    const { course, instructor } = req.body;
    const newRecord = new Course({
      course,
      instructor,
    });
    await newRecord.validate();
    const record = await newRecord.save();
    res.send({
      Message: "Course Created Successfully",
      record,
    });
  } catch (error) {
    res.send({
      Message: " Error in Creating Course",
      error,
    });
  }
};
export default createCourse;
