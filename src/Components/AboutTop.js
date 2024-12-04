import React from 'react';
import {Container} from "react-bootstrap";

function AboutTop(props) {
    return (
        <Container fluid='true' className="aboutTop">
            <div className="aboutTopOverlay">
                <div className="aboutBody">
                    <h2 className="subTitle text-white">HII I AM <strong><a className="text-decoration-none" href="https://facebook.com/sekul.hassan">SEKUL HASSAN</a></strong></h2>
                    <h2 className="subTitle text-white">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h2>
                    <h2 className="subTitle text-white">JAHANGIRNAGAR UNIVERSITY</h2>
                </div>
            </div>
        </Container>
    );
}

export default AboutTop;