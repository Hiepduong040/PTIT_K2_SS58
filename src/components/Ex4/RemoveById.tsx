import axios from "axios";

export default function RemoveById() {
  async function removeById(id: number) {
    await axios
      .delete(`http://localhost:8080/students/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }
  removeById(1);
  return <div></div>;
}