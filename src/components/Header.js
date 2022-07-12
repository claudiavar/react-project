import { useNavigate} from "react-router-dom";

const Header=()=>{
    const navigate = useNavigate();
    const LlamarHome=()=>{
        navigate('/home',{replace:true})
    }
    const LlamarNosotros=()=>{
        navigate('/nosotros',{replace:true})
    }
    const LlamarContacto=()=>{
        navigate('/contacto',{replace:true})
    }
    const LlamarRegistro=()=>{
        navigate('/registro',{replace:true})
    }
    const LlamarInicioSesion=()=>{
        navigate('/inicioSesion',{replace:true})
    }
return(
    <header>
        <nav>          
           <button onClick={LlamarHome}>Home</button>
           <button onClick={LlamarNosotros}>Nosotros</button>
           <button onClick={LlamarContacto}>Contacto</button>
           <button onClick={LlamarRegistro}>Registro</button>
           <button onClick={LlamarInicioSesion}>Inicie Sesión</button>
        </nav>
    </header>
)
}
export default Header;