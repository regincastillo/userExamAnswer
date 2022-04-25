import { Config } from 'Utils/Config'
import axios from "axios"
import {UseApiParams} from './type.d'


const gatewayInstance = axios.create({
    baseURL: Config?.API_URL
})

export const UseGetApi = ({ url, params, headers }:UseApiParams) =>   
gatewayInstance.get(url, {
    headers: headers || {},
    params: params || {},
  })