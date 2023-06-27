import axios, { AxiosResponse } from "axios";

// Set the base URL for your API
axios.defaults.baseURL = 'http://localhost:8080/api/v1';// Replace with your API server URL
// axios.defaults.baseURL = 'https://api-sela.rvldyfrmsyh.my.id/api/v1';// Replace with your API server URL

axios.defaults.baseURL = "http://localhost:8080/api/v1"; // Local API server

// Enable CORS by including the necessary headers
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE";
axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, Accept, Content-Type";

export async function loginApi(
  userEmail: string,
  password: string
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post("/user/login", { userEmail, password });
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

// Create Data Pengajuan
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

// Update Data Pengajuan
export async function updatePengajuan(token: string, pengajuanId: BigInteger, userId: BigInteger, karyawanId: BigInteger, noMemo: string, tglPengajuan: string, status: string): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  try {
    const response = await axios.post(`/pengajuan/save`, { token, pengajuanId, userId, karyawanId, noMemo, tglPengajuan, status });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Delete Data Pengajuan
export async function deletePengajuan(
  token: string,
  pengajuanId: BigInteger
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  const response = await axios.get("/device/get_all");
  return response.data;
}

// Create Data Device
export async function postDevice(
  token: string,
  deviceId: BigInteger,
  deviceName: string
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  try {
    const response = await axios.post(`/device/save`, {
      token,
      deviceId,
      deviceName,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// put Data Device
export async function putDevice(
  token: string,
  deviceId: BigInteger,
  deviceName: string
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  try {
    const response = await axios.post(`/device/save`, {
      token,
      deviceId,
      deviceName,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Delete Data Device
export async function deleteDevice(
  token: string,
  deviceId: BigInteger
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  const response = await axios.get("/spesification/get_all");
  return response.data;
}

// Create Data Spek
export async function postSpek(
  token: string,
  spekId: BigInteger,
  deviceName: string,
  ram: string,
  graphicCard: string,
  processor: string,
  storage: string
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  try {
    const response = await axios.post(`/spesification/save`, {
      token,
      spekId,
      deviceName,
      ram,
      graphicCard,
      processor,
      storage,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// put Data Spek
export async function putSpek(
  token: String,
  spekId: BigInteger,
  deviceId: BigInteger,
  deviceName: string,
  ram: string,
  graphicCard: string,
  processor: string,
  storage: string
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  try {
    const response = await axios.post(`/spesification/save`, {
      token,
      spekId,
      deviceId,
      deviceName,
      storage,
      processor,
      ram,
      graphicCard,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Delete Data Spek
export async function deleteSpek(
  token: string,
  SpekId: BigInteger
): Promise<AxiosResponse<any>> {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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
