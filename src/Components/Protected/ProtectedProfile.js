import {Navigate} from "react-router-dom";

const ProtectedProfile = ({Profile})=>{
    return localStorage.getItem('login') ? <Profile/>:<Navigate to="/"/>
}

export default ProtectedProfile;