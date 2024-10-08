import React, {Fragment} from 'react';
import {Button, Container} from "react-bootstrap";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid='true' className="background">
                <div className="overlay">
                    <div className="topBar">
                        <h1 className="title">Hi i am sekul hassan</h1>
                        <h2 className="subTitle">Mobile && Web app developer</h2>
                        <Button className="btnHover">Find Me</Button>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;
