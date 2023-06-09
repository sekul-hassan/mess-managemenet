import {Navigate} from "react-router-dom";

const ProtectBazar = ({Bazar})=>{
    return localStorage.getItem('login') ? <Bazar/>:<Navigate to="/"/>
}

export default ProtectBazar;