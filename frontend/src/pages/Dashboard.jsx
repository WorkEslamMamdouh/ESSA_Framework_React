
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import Home from "./Home";
import Table from "./Table";
import Form from "./Form";
import {Routes,Route} from "react-router-dom";

export default function Dashboard(){
return(
<div style={{display:"flex"}}>
<Sidebar/>
<div style={{flex:1}}>
<Header/>
<div style={{padding:20}}>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="table" element={<Table/>}/>
<Route path="form" element={<Form/>}/>
</Routes>
</div>
</div>
</div>
)}
