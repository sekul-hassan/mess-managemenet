import React, {Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid='true' className="background">
                <div className="overlay">
                    <Row>
                        <div className="topBar">
                            <h1>Hi i am sekul hassan</h1>
                            <h2>Mobile && Web app developer</h2>
                            <Button>Find Me</Button>
                        </div>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;
