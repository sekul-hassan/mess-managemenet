import React, {Fragment} from 'react';
import {Card,Container} from "react-bootstrap";

function Footer(props) {

    return (
        <Fragment>
            <Container fluid="true" className="mt-2">
                <Card>
                    <Card.Body><span>© 2023 <a href="https://recursiveeducation.com/" target="_blank" rel="noreferrer">Recursive Education</a>. All rights reserved.</span></Card.Body>
                </Card>
            </Container>
        </Fragment>
    );
}

export default Footer;