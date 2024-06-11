import axios from "axios";

export default function UpdateStudent() {

  async function updateStudent(id: any) {
    let user = {
        id:3,
        student_name:"thi hong",
        email:"thihong@gmail.com",
        address:"ha noi",
        phone:"0987654321",
        status:"true",
        created_at:"10/05/2024"
    };
    axios
      .patch(`http://localhost:8080/students/${id}`, user)
      
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  // cập nhật student_name và email mới cho student thông qua id
  updateStudent(3);
  
  return <div></div>;
}