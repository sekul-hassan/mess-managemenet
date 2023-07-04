import React, {Fragment} from 'react';
import ProfileTop from "../Components/ProfileTop";
import UserInfo from "../Components/UserInfo";

function Profile(props) {
    return (
        <Fragment>
            <ProfileTop/>
            <UserInfo/>
        </Fragment>
    );
}

export default Profile;