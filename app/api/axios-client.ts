import axios from 'axios'
import { toast } from 'react-toastify'

const axiosClient = axios.create({
  baseURL: process.env.apiDomain,
})

axiosClient.interceptors.request.use(async (config) => {
  return config
})

axiosClient.interceptors.response.use(
  (res) => res.data,
  (error) => {
    toast.error(error?.response?.data?.message, { autoClose: 2000 })
    return Promise.reject(error)
  }
)

export default axiosClient
