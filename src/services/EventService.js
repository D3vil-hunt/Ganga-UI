import axios from 'axios';
 const apiClient = axios.create({
     baseURL: 'http://localhost:9999',
     withCredentials: false,
     headers: {
         'Accept': 'application/json',
         'content-Type': 'application/json'
     }

 })

 export default{
     getApiClient(){
         return apiClient;
     }
 }