import React, {Fragment} from 'react';
import {Card,Container} from "react-bootstrap";

function Footer(props) {

    return (
        <Fragment>
            <Container fluid="true" className="mt-4">
                <Card>
                    <Card.Body><span>© 2023 SEKUL HASSAN. All rights reserved.</span></Card.Body>
                </Card>
            </Container>
        </Fragment>
    );
}

export default Footer;