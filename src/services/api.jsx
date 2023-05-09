import axios from "axios";

const instance = axios.create({
  baseURL: "https://64459b27b80f57f581bdac30.mockapi.io/",
});

const fetchUsers = async () => {
  const { data } = await instance.get("users");
  return data;
};
export default fetchUsers;
