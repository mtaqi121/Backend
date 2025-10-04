import Student from "../models/Student.js";

const createStudent = async (req, res) => {
  try {
    const { name, age, course } = req.body;
    const newStudent = new Student({
      name,
      age,
      course,
    });
    await newStudent.validate();
    const record = await newStudent.save();
    res.send({
      Message: "Student Created Successfully",
      record,
    });
  } catch (error) {
    res.send({
      Message: " Error in Creating Student",
      error,
    });
  }
};

const getAllStudent = async (_, res) => {
  try {
    const AllStudents = await Student.find({}).populate("course");
    res.send({
      message: "All Students",
      AllStudents,
    });
  } catch (error) {
    res.send({
      message: "Error in fetching students",
      error,
    });
  }
};

export { createStudent, getAllStudent };
