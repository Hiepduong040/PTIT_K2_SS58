import axios from "axios";

export default function GetAllStudent() {
  async function GetAllStudent() {
    try {
      const res = await axios.get("http://localhost:8080/students");
      console.log(res.data);
    } catch (err) {
      console.error("Lỗi lấy  danh sách sinh viên:", err);
    }
  }
  GetAllStudent();
  return <div></div>;
}