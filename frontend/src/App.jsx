
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/app/*" element={<Dashboard/>}/>
</Routes>
</BrowserRouter>
)}
