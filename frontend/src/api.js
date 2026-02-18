
import axios from "axios";
const api=axios.create({baseURL:"https://localhost:49474/api/"});
api.interceptors.request.use(c=>{
const t=localStorage.getItem("t");
if(t)c.headers.Authorization="Bearer "+t;
return c;
});
export default api;
