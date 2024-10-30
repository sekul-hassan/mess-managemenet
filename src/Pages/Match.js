import React, {Fragment, useState} from 'react';
import BorderList from "../Components/BorderList";
import BorderTopBar from "../Components/BorderTopBar";
import ModifyModal from "../Components/ModifyModal";
import ModifyContext from "../Components/Context/ModifyContext";
import axios from "axios";
import Summary from "../Components/Summary";
import AddMember from "../Components/AddMember";

function Match(props) {
    const [addMember,setAddMember] = useState(false);
    const [openModify,setOpenModify] = useState(false);
    const [user,setUser] = useState([]);
    const messId = localStorage.getItem("messId");
    const [load,Reload] = useState(false);

    const openAddMember = ()=>{
        setAddMember(true);
    }
    const closeAddMember = ()=>{
        setAddMember(false);
    }
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
            <ModifyContext.Provider value={{addMember,closeAddMember, openModify,handleModify,user,load,Reload,openAddMember}}>
                <BorderTopBar/>
                <BorderList/>
                <AddMember/>
                <Summary/>
                <ModifyModal/>

            </ModifyContext.Provider>
        </Fragment>
    );
}

export default Match;