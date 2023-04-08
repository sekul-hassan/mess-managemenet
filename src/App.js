import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Asset/css/Custom.css'
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


function App(){
    const [isLogin,setIsLogin] = useState(false);
    const [isLogout,setIsLogout] = useState(true);
    const login = ()=>{
        localStorage.setItem('login','true');
        setIsLogin(true);
        setIsLogout(!isLogout);
    }
    const logOut = ()=>{
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
    const [loginOpen,setLoginOpen] = useState(false);
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

    return (
    <BrowserRouter>
       <AddExtraContext.Provider value={{extra,openExtra,closeExtra}}>
           <div className="App">
               {(localStorage.getItem('login') || isLogin) ? (<AdditionMenu logOut={logOut} openAddMember={openAddMember} />):(<Menu open = {open} open1={open1}/>)}
              <React.Suspense>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="about" element={<About/>}/>
                      <Route path="contact" element={<Contact/>}/>
                      <Route path="match" element={<ProtectMatch isLogin={isLogin} Match={Match} />} />
                      <Route path="profile" element={<ProtectedProfile isLogin={isLogin} Profile = {Profile} />}/>
                  </Routes>
              </React.Suspense>
               <Footer/>
               <LoginModal loginOpen={loginOpen} close1={close1} login={login}/>
               <AddMember addMember={addMember} closeAddMember={closeAddMember} />
               <AddModal addOpen={addOpen} close={close}/>
           </div>
       </AddExtraContext.Provider>
    </BrowserRouter>
  );
}

export default App;
