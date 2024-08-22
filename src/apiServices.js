import axios from 'axios';

const API_URL = 'http://localhost:6007';

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/api/login', { username, password });
    const { token } = response.data;
    localStorage.setItem('authToken', token);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const getAuthToken = () => localStorage.getItem('authToken');

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const logout = () => {
  localStorage.removeItem('authToken');
};

export default api;
