import React, {Fragment} from 'react';
import ProfileTop from "../Components/ProfileTop";
import MealRateChart from "../Components/MealRateChart";
import SearchFriends from "../Components/SearchFrineds";

function Profile(props) {
    return (
        <Fragment>
            <ProfileTop/>
            <MealRateChart/>
            <SearchFriends/>
            {/*<UserInfo/>*/}
        </Fragment>
    );
}

export default Profile;