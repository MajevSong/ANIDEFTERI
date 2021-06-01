// http isteği yapmamız için axios paketi ile API oluşturduk
// localhost:5000'e istek yaptık
import axios from "axios";
// aksiyonlarımızın orjinali hepsi burada
const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchMemories = async () => await API.get("/memories");

export const fetchMemory = async (id) => await API.get(`/memories/${id}`);

export const createMemory = async (newMemory) =>
  await API.post("/memories", newMemory);

export const updateMemory = async (id, updatedMemory) =>
  await API.put(`/memories/${id}`, updatedMemory);

/*
  ()=> await API.get(`/memories`)} -> return response
  () => { return } 
  süslü parantez ile de return etmemiz gerekiyor
  normal arrow function zaten return döndürüyor tek satır olma şartıyla
*/

export const deleteMemory = async (id) => await API.delete(`/memories/${id}`);

export const signUp = async (formData) =>
  await API.post("/users/signup", formData);

export const signIn = async (formData) =>
  await API.post("/users/signin", formData);

export const logOut = async (id) => await API.get(`/users/logout/${id}`);
