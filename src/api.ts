import axios, { AxiosResponse } from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'https://api-sela.rvldyfrmsyh.my.id/api/v1';// Replace with your API server URL

// Enable CORS by including the necessary headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type';

export async function loginApi(userEmail: string, password: string): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post('/user/login', { userEmail, password });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Read Data Pengajuan
export async function getPengajuan(token: String): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  const response = await axios.get('/pengajuan/get_all');
  return response.data;
}

// Create Data Pengajuan
export async function putPengajuan(token: string, userId: BigInteger, karyawanId:BigInteger, noMemo: string, tglPengajuan: string, status: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/pengajuan/save`, { token, userId, karyawanId, noMemo, tglPengajuan, status });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


// export async function formpengajuancrud(): Promise<void> {

// }