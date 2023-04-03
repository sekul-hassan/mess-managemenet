import { Navigate } from 'react-router-dom';

const ProtectMatch = ({ Match, isLogin }) => {
    return isLogin ? <Match /> : <Navigate to="/" />;
};

export default ProtectMatch;
