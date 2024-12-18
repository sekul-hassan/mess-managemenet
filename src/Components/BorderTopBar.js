import React, {Fragment, useContext} from 'react';
import {Button, Container,Row} from "react-bootstrap";
import ModifyContext from "./Context/ModifyContext";

function BorderTopBar(props) {
    const {openAddMember} = useContext(ModifyContext);
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div className="borderTop">
                    <div className="borderOverlay">
                        <Row>
                            <div className="mainContent">
                                <h2 className="content">Your Border List Here...</h2>

                                <Button className="btnHover" onClick={openAddMember}>Add Member</Button>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default BorderTopBar;