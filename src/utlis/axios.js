import axiosLib from 'axios'
import {BASE_URL} from '@env'
import { getToken } from '../services/TokenService';
//console.log(`${BASE_URL}/api`)
const axios = axiosLib.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        Accept: "application/json",
    }
})
axios.interceptors.request.use( async (req) => {
  const token = await getToken()
  if(token !== null) {
    req.headers["Authorization"] = `Bearer ${token}`
  }
  return req
})

export default axios;