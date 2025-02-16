import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export async function get(path: string, params: any = {}) {
  return await axios.get(`${BASE_URL}/${path}`, { params }).then((res) => res.data);
}

export async function post(path: string, body: any, config?: any) {
  return await axios.post(`${BASE_URL}/${path}`, body, config).then((res) => res.data);
}

export async function put(path: string, body: any) {
  return await axios.put(`${BASE_URL}/${path}`, body).then((res) => res.data);
}

export async function remove(path: string, params: any = {}) {
  return await axios.delete(`${BASE_URL}/${path}`, { params }).then((res) => res.data);
}
