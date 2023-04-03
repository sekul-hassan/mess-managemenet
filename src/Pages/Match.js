import React, {Fragment} from 'react';
import BorderList from "../Components/BorderList";
import BorderTopBar from "../Components/BorderTopBar";
import AddExtraModal from "../Components/AddExtraModal";

function Match(props) {
    return (
        <Fragment>
            <BorderTopBar/>
            <BorderList/>
            <AddExtraModal/>
        </Fragment>
    );
}

export default Match;