import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
        const localKandyUser = localStorage.getItem("kandy_user")
        const kandyUserObject = JSON.parse(localKandyUser)
    
        if (kandyUserObject.staff) {
            //Return employee view
            return <EmployeeNav />
        }
        else {
            //return customer views
            return <CustomerNav />
        }
    }