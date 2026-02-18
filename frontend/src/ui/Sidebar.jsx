
import {Link} from "react-router-dom";

export default function Sidebar(){
return(
<div style={{width:220,background:"#1f2937",color:"white",height:"100vh",padding:20}}>
<h3>ERP</h3>
<Link to="/app">Dashboard</Link><br/>
<Link to="/app/table">Table</Link><br/>
<Link to="/app/form">Form</Link>
</div>
)}
