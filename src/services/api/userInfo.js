import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export async function getUsers() {
  try {
    const response = await api.get('/api/users');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editUser(userId, formData) {
  try {
    const response = await api.put(`/api/users/${userId}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(userId) {
  try {
    const response = await api.delete(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
