import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid='true' className="background">
                <div className="overlay">
                    <div className="topBar">
                        <h1 className="upperTitle">This is mess management web application</h1>
                        <h2 className="subTitle text-uppercase mt-4 mb-4">Please explore this & developer with</h2>
                        <a className="btnHover" href="https://recursiveeducation.com" target="_blank" rel="noreferrer">Find Me</a>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;
