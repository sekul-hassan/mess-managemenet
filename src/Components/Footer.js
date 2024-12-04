import React from 'react';
import {Container} from "react-bootstrap";

function Footer(props) {

    return (
        <Container fluid="true" className="footer">
            <span>© 2023 <a href="https://recursiveeducation.com/" target="_blank"
                            rel="noreferrer">Recursive Education</a>. All rights reserved.</span>
        </Container>
    );
}

export default Footer;