import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Asset/css/Custom.css'
import '../src/Asset/css/Text.css'

import Menu from "./Components/Menu";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import {useState} from "react";
import AdditionMenu from "./Components/AdditionMenu";
import LoginModal from "./Components/LoginModal";
import AddModal from "./Components/AddModal";
import AddMember from "./Components/AddMember";
import Match from "./Pages/Match";
import AddExtraContext from "./Components/Context/AddExtra";
import Profile from "./Pages/Profile";
import ProtectMatch from "./Components/Protected/ProtectMatch";
import ProtectedProfile from "./Components/Protected/ProtectedProfile";
import axios from "axios";
import Bazar from "./Pages/Bazar";
import ProtectBazar from "./Components/Protected/ProtectBazar";
import {toast} from "react-toastify";
import CustomToast from "./Components/CustomToast";


function App(){
    const [loginOpen,setLoginOpen] = useState(false);
    const [isLogin,setIsLogin] = useState(false);
    const [isLogout,setIsLogout] = useState(true);

    const login = (e) => {
        console.log(e);
        axios.post(`http://localhost:8080/login`, {}, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'messId': e.messId,
                'messPass': e.messPass
            }
        }).then(res => {
            const data = res.data;
            if (data !== null && data !== '' && data !== undefined) {
                toast.success("Login successful");
                localStorage.setItem('login', 'true');
                setIsLogin(true);
                setIsLogout(!isLogout);
            } else {
                toast.error("Login failed.");
                localStorage.setItem('notMatch', 'User name or password not matched');
            }
        }).catch(err => {
            console.log(err);
            toast.error(err.response.data.message);
        });
    }

    const logOut = ()=>{
       axios.get("http://localhost:8080/checkSession").then((res)=>{
           const data = res.data;
           console.log(data);
       })
        localStorage.clear();
        setIsLogin(false);
        setIsLogout(false);
    }
    const [addOpen,setAddOpen] = useState(false);
    const open = ()=>{
        setAddOpen(true);
    }
    const close = ()=>{
        setAddOpen(false);
    }

    const open1 = ()=>{
        setLoginOpen(true);
    }
    const close1 = ()=>{
        setLoginOpen(false);
    }
    const [addMember,setAddMember] = useState(false);
    const openAddMember = ()=>{
        setAddMember(true);
    }
    const closeAddMember = ()=>{
        setAddMember(false);
    }

    const [extra,setExtra] = useState(false);
    const openExtra = ()=>{
        setExtra(true);
    }
    const closeExtra = ()=>{
        setExtra(false);
    }
    const [loadAgain,setLoadAgain] = useState(false);
    const handleLoadAgain = ()=>{
        setLoadAgain(!loadAgain);
    }

    return (
    <BrowserRouter>
       <AddExtraContext.Provider value={{extra,openExtra,closeExtra,handleLoadAgain,loadAgain}}>
           {(localStorage.getItem('login') || isLogin) ? (<AdditionMenu logOut={logOut} openAddMember={openAddMember} />):(<Menu open = {open} open1={open1}/>)}
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="about" element={<About/>}/>
               <Route path="contact" element={<Contact/>}/>
               <Route path="match" element={<ProtectMatch Match={Match} />} />
               <Route path="profile" element={<ProtectedProfile Profile = {Profile} />}/>
               <Route path="bazar" element={<ProtectBazar Bazar={Bazar}/>}/>
           </Routes>
           <Footer/>
           <CustomToast/>
           <LoginModal loginOpen={loginOpen} close1={close1} login={login}/>
           <AddMember addMember={addMember} closeAddMember={closeAddMember} />
           <AddModal addOpen={addOpen} close={close}/>
       </AddExtraContext.Provider>
    </BrowserRouter>
  );
}

export default App;
