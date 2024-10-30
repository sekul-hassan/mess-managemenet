import React, {Fragment, useEffect, useState} from 'react';
import BazarTop from "../Components/BazarTop";
import BazarList from "../Components/BazarList";
import ModifyCost from "../Components/ModifyCost";
import BazarContext from "../Components/Context/BazarContext";
import AddCost from "../Components/AddCost";
import axios from "axios";
import ExtraBill from "../Components/ExtraBill";
import AddExtraModal from "../Components/AddExtraModal";

function Bazar(props) {
    const [set,reset] = useState(false);
    const [add,setAdd] = useState(false);
    const [load,setLoad] = useState(false);
    const [bills,setBill] = useState([]);
    const [idx,setId] = useState(null);
    const [extra,setExtra] = useState(false);
    const[reloadExtraBill,setReloadExtraBill] = useState(false);
    const messId = localStorage.getItem('messId');
    const openExtra = ()=>{
        setExtra(true);
    }
    const closeExtra = ()=>{
        setExtra(false);
    }

    useEffect(() => {
        const loadBill = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/getAllCost/${messId}`);
                const data = res.data;
                setBill(data.data);
                setLoad(false);
            } catch (error) {
                console.log(error);
            }
        };

        loadBill();
    }, [messId, setBill,load,setLoad]);

    const handleSetAdd = ()=>{
        setAdd(!add);
    }
    const handleSet = (e)=>{
        setId(e.target.id);
        reset(!set);
    }
    const handleSet1 = ()=>{
        reset(!set);
    }

    return (
        <Fragment>
            <BazarContext.Provider value={{set,handleSet,handleSet1,add,handleSetAdd,load,setLoad,bills,idx,extra,openExtra,closeExtra,reloadExtraBill,setReloadExtraBill}}>
                <BazarTop/>
                <BazarList/>
                <ExtraBill/>
                <ModifyCost/>
                <AddCost/>
                <AddExtraModal/>
            </BazarContext.Provider>
        </Fragment>
    );
}

export default Bazar;