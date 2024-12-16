// src/utils/commonApi.js
import axios from 'axios';
import BASE_URL from './baseUrl';
import API_PATHS from './allApi';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally add a request interceptor for token handling
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token'); // Get token from storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Generic function to handle API requests
const commonApi = async (method, url, data = null, params = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response || error.message);
    throw error; // Re-throw the error to handle it in the component
  }
};

// Export commonly used API calls as functions
export const loginUser = (data) => commonApi('POST', API_PATHS.LOGIN, data);
export const registerUser = (data) => commonApi('POST', API_PATHS.REGISTER, data);
export const fetchStudentDashboard = () => commonApi('GET', API_PATHS.STUDENT_DASHBOARD);
export const fetchTeacherDashboard = () => commonApi('GET', API_PATHS.TEACHER_DASHBOARD);
export const fetchAdminDashboard = () => commonApi('GET', API_PATHS.ADMIN_DASHBOARD);
export const getUsers = () => commonApi('GET', API_PATHS.GET_USERS);
export const addUser = (data) => commonApi('POST', API_PATHS.ADD_USER, data);
export const updateUser = (data) => commonApi('PUT', API_PATHS.UPDATE_USER, data);
export const deleteUser = (userId) => commonApi('DELETE', `${API_PATHS.DELETE_USER}/${userId}`);

// Add more API functions as needed

export default commonApi;
