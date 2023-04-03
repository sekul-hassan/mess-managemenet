import React, {Fragment} from 'react';
import ProfileTop from "../Components/ProfileTop";
import UserInfo from "../Components/UserInfo";
import LastMonthUpdate from "../Components/LastMonthUpdate";

function Profile(props) {
    return (
        <Fragment>
            <ProfileTop/>
            <UserInfo/>
            <LastMonthUpdate/>
        </Fragment>
    );
}

export default Profile;