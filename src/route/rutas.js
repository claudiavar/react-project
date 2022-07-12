import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import Registro from "../pages/Registro";
import InicioSesion from "../pages/InicioSesion";
import Footer from "../components/Footer";
import App from "../App";

const Rutas=()=>{
    return(
    <BrowserRouter>
    <Header/>    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/inicioSesion" element={<InicioSesion/>}/>
    </Routes>
    <App/>  
    <Footer/>              
    </BrowserRouter>
    )
}
export default Rutas;