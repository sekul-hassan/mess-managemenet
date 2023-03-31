import React from 'react';
import BorderList from "../Components/BorderList";
import BorderTopBar from "../Components/BorderTopBar";

function Border(props) {
    return (
        <div>
            <BorderTopBar/>
            <BorderList/>
        </div>
    );
}

export default Border;