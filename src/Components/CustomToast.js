import React from 'react';
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CustomToast(props) {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
        />
    );
}

export default CustomToast;