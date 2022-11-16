import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import logo from "./images/kandylogo.jpg"

export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <Link to="/"><img className="kandyLogo" src={logo}/></Link>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Find Candy</Link>
            </li>
            {
            localStorage.getItem("kandy_user")
            ? <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
            :""
            }
        </ul>
    )
}

