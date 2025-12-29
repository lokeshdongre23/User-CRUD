/*
this iis use to get he daa from the back end
*/

import axios from "axios";
const URI = import.meta.env.VITE_BASE_URI;

const connection = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: URI,
});

const getUsers = async () => {
  const getUSer = await connection.get("/user");
  return getUSer;
};
export const postUsers = async (data) => {
  const setUsers = await connection.post("/user", data);
  console.log(setUsers);
};
export const deleteUSer = async (name) => {
  const deleteUser = await connection.delete(`/user/${name}`);
  return deleteUser;
};

export default getUsers;
