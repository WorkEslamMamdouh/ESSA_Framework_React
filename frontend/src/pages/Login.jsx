
import {useState} from "react";
import api from "../api";

export default function Login(){
const[u,setU]=useState("");
const[p,setP]=useState("");

const go=async()=>{
const r=await api.post("auth/login",{username:u,password:p});
localStorage.setItem("t",r.data.token);
location="/app";
};

return(<div style={{padding:100}}>
<h2>ERP Login</h2>
<input placeholder="user" onChange={e=>setU(e.target.value)}/><br/>
<input type="password" placeholder="pass" onChange={e=>setP(e.target.value)}/><br/>
<button onClick={go}>Login</button>
</div>)
}
