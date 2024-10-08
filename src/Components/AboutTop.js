import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";

function AboutTop(props) {
    return (
        <Fragment>
            <Container fluid='true' className="aboutTop">
                <div className="aboutTopOverlay">
                    <div className="aboutBody">
                        <h2>HII I AM SEKUL HASSAN</h2>
                        <h2>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h2>
                        <h2>JAHANGIRNAGAR UNIVERSITY</h2>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default AboutTop;