// api/carouselInfo.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export async function createCarousel(formData) {
  try {
    const response = await api.post('/api/carousels', formData);
    return response.data;
  } catch (error) {
    console.error('Error creating carousel:', error);
    throw error;
  }
}


export async function getImages() {
  try {
    const response = await api.get('/api/images');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function uploadImage(formData) {
  try {
    const response = await api.post('/api/images', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateCarousel(carouselId, formData) {
  try {
    const response = await api.put(`/api/carousels/${carouselId}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteCarousel(carouselId) {
  try {
    const response = await api.delete(`/api/carousels/${carouselId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
