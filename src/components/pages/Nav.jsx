import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <nav className="nav"> 
            <NavLink style={({isActive}) => {
                return isActive ? {color: "blue"} : {}
            }} to="/">Home</NavLink>
            <NavLink style={({isActive}) => {
                return isActive ? {color: "blue"} : {}
            }} to="/about">About</NavLink>
            <NavLink style={({isActive}) => {
                return isActive ? {color: "blue"} : {}
            }} to="/feedback">Feedback </NavLink>
        </nav>
    )
}


export default Nav;