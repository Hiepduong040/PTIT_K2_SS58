import axios from "axios";

export default function CreateStudent() {
  async function createStudent() {
    let newUser = {
      student_name: "hanh",
      email: "hanh@gmail.com",
      address: "hcm",
      phone: "1234567890",
      status: true,
    };
    axios
      .post("http://localhost:8080/students", newUser)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  createStudent();
  return <div></div>;
}