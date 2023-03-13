import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import HomeTopBar from "../Components/HomeTopBar";

function Home(props) {
    return (
        <Fragment>
            <Menu/>
            <HomeTopBar/>
        </Fragment>
    );
}

export default Home;