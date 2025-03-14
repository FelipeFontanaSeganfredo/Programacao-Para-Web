import { NavLink , Outlet } from "react-router-dom";
const MenuPublico = () =>{
    return (
        <>
        <ul>
            <li><NavLink exact = "true" to = "/">Home</NavLink></li>
            <li><NavLink exact = "true" to = "usuario">Usuário</NavLink></li>
            <li><NavLink exact = "true" to = "login">Login</NavLink></li>
        </ul>
        <Outlet/>
        </>
    )
}

export default MenuPublico;