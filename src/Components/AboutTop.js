import React, {Fragment} from 'react';
import {Container, Row} from "react-bootstrap";

function AboutTop(props) {
    return (
        <Fragment>
            <Container fluid='true' className="aboutTop">
                <div className="aboutTopOverlay">
                    <Row>
                        <div className="aboutBody">
                            <h2>HII I AM SEKUL HASSAN</h2>
                            <h2>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h2>
                            <h2>JAHANGIRNAGAR UNIVERSITY</h2>
                        </div>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
}

export default AboutTop;