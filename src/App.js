import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Asset/css/Custom.css'
import Menu from "./Components/Menu";
import Border from "./Pages/Border";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import {useState} from "react";
import AdditionMenu from "./Components/AdditionMenu";
import LoginModal from "./Components/LoginModal";
import AddModal from "./Components/AddModal";


function App(){
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
    return (
    <BrowserRouter>
        <div className="App">
           <Menu open = {open} open1={open1}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="border" element={<Border/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
            <LoginModal loginOpen={loginOpen} close1={close1}/>
            <AddModal addOpen={addOpen} close={close}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
