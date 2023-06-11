import React, {Fragment, useState} from 'react';
import BorderList from "../Components/BorderList";
import BorderTopBar from "../Components/BorderTopBar";
import AddExtraModal from "../Components/AddExtraModal";
import ModifyModal from "../Components/ModifyModal";
import ModifyContext from "../Components/Context/ModifyContext";
import axios from "axios";
import Summary from "../Components/Summary";

function Match(props) {
    const [openModify,setOpenModify] = useState(false);
    const [user,setUser] = useState([]);
    const messId = localStorage.getItem("messId");
    const [load,Reload] = useState(false);
    const handleModify = (e)=>{
        setOpenModify(!openModify);
        if(!openModify){
            const id = e.target.id;
            axios.get(`http://localhost:8080/oneMember/${messId}/${id}`).then((res)=>{
               const data = res.data;
               setUser(data);
            });
        }
    }

    return (
        <Fragment>
            <ModifyContext.Provider value={{openModify,handleModify,user,load,Reload}}>
                <BorderTopBar/>
                <BorderList/>
                <Summary/>
                <ModifyModal/>
                <AddExtraModal/>
            </ModifyContext.Provider>
        </Fragment>
    );
}

export default Match;