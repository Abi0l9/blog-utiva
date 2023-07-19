import { baseUrl } from "../const";
import axios from "axios";

const getBlogs = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const getABlog = async (blogId) => {
  const request = await axios.get(`${baseUrl}${blogId}`);
  return request.data;
};

const addBlog = async (blog) => {
  const request = await axios.post(baseUrl, blog);
  return request.data;
};

const editBlog = async (blogId) => {
  const request = await axios.patch(`${baseUrl}${blogId}`);
  return request.data;
};

const deleteBlog = async (blogId) => {
  const request = await axios.delete(`${baseUrl}${blogId}`);
  return request.data;
};

const services = { getBlogs, getABlog, addBlog, editBlog, deleteBlog };
export default services;
