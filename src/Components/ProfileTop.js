import React, {Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import profile from "../Asset/Images/coverPic.JPG";

function ProfileTop(props) {
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div className="coverPic">
                    <Row>
                       <div className="coverPicOverLay">
                           <img className="profile" src={profile}/>
                           <Row>
                               <div className="imgUpload">
                                   <label htmlFor="">Select Cover Photo</label>
                                   <input type="image"/><br/>
                                   <input type="image" placeholder="Select Profile Photo"/>
                               </div>
                           </Row>
                       </div>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
}

export default ProfileTop;