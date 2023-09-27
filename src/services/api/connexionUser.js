import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export async function createUser(formData) {
  try {
    const response = await api.post('/api/users', formData); 
  } catch (error) {
    throw error; 
  }
}

export async function checkAuthentication(formData) {
  try {
    const response = await api.get(`/api/users?email=${formData.email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}