import { NavLink, Outlet } from "react-router-dom";

const MenuPrivado = () =>{
    return (
        <>
        <ul>
            <li><NavLink exact = "true" to = "privado">Home</NavLink></li>
            <li><NavLink exact = "true" to = "usuario">Usuário</NavLink></li>
            <li><NavLink exact = "true" to = "login">Login</NavLink></li>
        </ul>
        <Outlet/>
        </>
    )
}

export default MenuPrivado;