import React, {Fragment} from 'react';
import Menu from "../Components/Menu";
import HomeTopBar from "../Components/HomeTopBar";
import Footer from "../Components/Footer";
import AddForm from "../Components/AddForm";

function Home(props) {
    return (
        <Fragment>
            <Menu/>
            <HomeTopBar/>
            <Footer/>
            <AddForm/>
        </Fragment>
    );
}

export default Home;