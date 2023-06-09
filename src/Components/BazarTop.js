import React, {Fragment, useContext} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import BazarContext from "./Context/BazarContext";

function BazarTop(props) {

    const {handleSetAdd} = useContext(BazarContext);

    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div className="borderTop">
                    <div className="borderOverlay">
                        <Row>
                            <div className="mainContent">
                                <h2 className="content">Your Bazar List Here...</h2>
                                <Button className="btnHover" onClick={handleSetAdd}>Add Today Cost</Button>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default BazarTop;