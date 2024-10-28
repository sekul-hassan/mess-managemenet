import React, {Fragment, useState} from 'react';
import BorderList from "../Components/BorderList";
import BorderTopBar from "../Components/BorderTopBar";
import AddExtraModal from "../Components/AddExtraModal";
import ModifyModal from "../Components/ModifyModal";
import ModifyContext from "../Components/Context/ModifyContext";
import axios from "axios";
import Summary from "../Components/Summary";
import ExtraBill from "../Components/ExtraBill";

function Match(props) {

    const [openModify,setOpenModify] = useState(false);
    const [user,setUser] = useState([]);
    const messId = localStorage.getItem("messId");
    const [load,Reload] = useState(false);
    const [extra,setExtra] = useState(false);
    const[reloadExtraBill,setReloadExtraBill] = useState(false);
    const openExtra = ()=>{
        setExtra(true);
    }
    const closeExtra = ()=>{
        setExtra(false);
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
            <ModifyContext.Provider value={{extra,openExtra,closeExtra,openModify,handleModify,user,load,Reload,reloadExtraBill,setReloadExtraBill}}>
                <BorderTopBar/>
                <BorderList/>
                <ExtraBill/>
                <Summary/>
                <ModifyModal/>
                <AddExtraModal/>
            </ModifyContext.Provider>
        </Fragment>
    );
}

export default Match;