import axios from 'axios';

const API_URL = 'http://localhost:5006/api'; // Adjust as needed

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add Authorization header if needed
  },
});

// Fetch all subjects
export const fetchSubjects = async () => {
  try {
    const response = await axiosInstance.get('/subjects');
    return response.data; // Return the data directly
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Add a new subject
export const addSubject = async (subject) => {
  try {
    const response = await axiosInstance.post('/subjects', subject);
    return response.data; // Return the added subject
  } catch (error) {
    console.error('Error adding subject:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Export all functions
export const api = {
  fetchSubjects,
  addSubject,
};
