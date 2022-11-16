import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"
import "./ApplicationViews.css"

export const ApplicationViews = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const KandyUserObject = JSON.parse(localKandyUser)

	if (KandyUserObject.staff) {
        //Return employee view
        return <EmployeeViews />
    }
    else {
        //return customer views
        return <CustomerViews />
    }
}