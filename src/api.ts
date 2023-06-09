import axios, { AxiosResponse } from 'axios';

export async function login(email: string, password: string): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/login/save', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
}
