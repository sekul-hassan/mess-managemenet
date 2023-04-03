import {Navigate} from "react-router-dom";

const ProtectedProfile = ({Profile,isLogin})=>{
    return isLogin ? <Profile/>:<Navigate to="/"/>
}

export default ProtectedProfile;