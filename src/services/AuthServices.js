import axios from '../utlis/axios'
import { getToken, setToken } from "./TokenService"

export async function login(credentials) {
    //console.log(credentials)
    const {data} = await axios.post(`/login`, credentials)
    await setToken(data.token)
    //console.log(data.token)
}

export default async function register(registerInfo) {
  const {data} = await axios.post('/register', registerInfo)
  await setToken(data.token)
}

export async function sendPasswordResetLink(email) {
  const {data} = await axios.post('/forgot-password', { email })
  console.log(data)
  return data.status
}
 
export async function loadUser() {      
    const { data: user } = await axios.get(`/user`)    
    return user;
}

export async function logout() {
  await axios.post('/logout', {})
  await setToken(null)
}
  
  //console.log(`${BASE_URL}/api/user`)
  
  