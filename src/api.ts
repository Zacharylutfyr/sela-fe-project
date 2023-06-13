import axios, { AxiosResponse } from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'http://localhost:8080/api/v1'; // Replace with your API server URL

// Enable CORS by including the necessary headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type';

export async function loginApi(userEmail: string, password: string): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post('/login/save', { userEmail, password });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}