import { Navigate } from 'react-router-dom';

const ProtectMatch = ({ Match }) => {
    return localStorage.getItem('login') ? <Match /> : <Navigate to="/" />;
};

export default ProtectMatch;
