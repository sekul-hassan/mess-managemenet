import {Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import profile from "../Asset/Images/coverPic.JPG";

function ProfileTop(props) {

    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div className="coverPic">
                    <Row>
                       <div className="coverPicOverLay">
                           <img className="profile" src={profile} alt=""/>
                           <Row>
                               <div className="imgUpload">
                                   <input type="file" id="cover-photo" className="file-upload1"/><Button className="uploadBtn1">Cover Pic</Button><br/>
                                   <input type="file" id="profile-pic" className="file-upload2"/><Button className="uploadBtn2">Profile</Button>
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