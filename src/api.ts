import axios, { AxiosResponse } from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'http://localhost:8080/api/v1';// Replace with your API server URL
// axios.defaults.baseURL = 'https://api-sela.rvldyfrmsyh.my.id/api/v1';// Replace with your API server URL

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
export async function getKaryawan(token: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  const response = await axios.get('/pengajuan/get_all');
  console.log(response.data);
  return response.data;
}

// Read Data Pengajuan
export async function getPengajuan(token: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  const response = await axios.get('/pengajuan/get_all');
  console.log(response.data);
  return response.data;
}

// Create Data Pengajuan Sewa Laptop
export async function postPengajuan(
  token: string,
  spekId: BigInteger,
  karyawanId: BigInteger,
  noMemo: string,
  tglPengajuan: string,
  tglPenerima: string,
  status: string
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/pengajuan/save`, {
      spekId,
      karyawanId,
      noMemo,
      tglPengajuan,
      tglPenerima,
      status
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Get Spek by id
export async function getSpekbyid(token: string, deviceId: BigInteger): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.get(`/spesification/get_by` + deviceId);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Update Data Pengajuan
export async function updatePengajuan(
  token: string,
  pengajuanId: BigInteger,
  karyawanId: BigInteger,
  spekId: BigInteger,
  noMemo: string,
  tglPengajuan: string,
  tglPenerima: string,
  status: string
): Promise<AxiosResponse<any>> {
  console.log({
    pengajuanId,
    karyawanId,
    spekId,
    noMemo,
    tglPengajuan,
    tglPenerima,
    status
  })
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/pengajuan/save`, {
      token,
      pengajuanId,
      karyawanId,
      spekId,
      noMemo,
      tglPengajuan,
      tglPenerima,
      status
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Delete Data Pengajuan
export async function deletePengajuan(token: string, pengajuanId: BigInteger): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.delete(`/pengajuan/delete/${pengajuanId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Read Data Device
export async function getDevice(token: String): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  const response = await axios.get('/device/get_all');
  return response.data;
}

// Create Data Device
export async function postDevice(token: BigInteger, deviceName: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/device/save`, { token, deviceName });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Update Data Device
export async function updateDevice(token: string, deviceId: BigInteger, deviceName: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/device/save`, { token, deviceId, deviceName });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Delete Data Device
export async function deleteDevice(token: string, deviceId: BigInteger): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.delete(`/device/delete/${deviceId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Read Data Spek
export async function getSpek(token: String): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  const response = await axios.get('/spesification/get_all');
  return response.data;
}

// Create Data Spek
export async function postSpek(token: BigInteger, deviceId: string, ram: string, graphic_card: string, processor: string, storage: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/spesification/save`, { token, deviceId, ram, graphic_card, processor, storage });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Update Data Spek
export async function UpdateSpek(token: BigInteger, spekId: BigInteger, deviceId: BigInteger, ram: string, graphic_card: string, processor: string, storage: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/spesification/save`, { token, spekId, deviceId, ram, graphic_card, processor, storage });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


// Delete Data Spek
export async function deleteSpek(token: string, SpekId: BigInteger): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.delete(`/spesification/delete/${SpekId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


// export async function formpengajuancrud(): Promise<void> {

// }
