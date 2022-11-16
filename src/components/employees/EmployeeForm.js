import { useState , useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    const [locations, setLocations] = useState([])
    const [employee, update] = useState({
        locationId: "",
        startDate: "",
        rate: "",
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the employee list
    */
    let navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(res => res.json())
                .then((locArr) => setLocations(locArr))
        },
        []
    )


    const handleSaveEmployee = (e) => {
        e.preventDefault()
   
        const employeeToSendToAPI = {
            userId: kandyUserObject.id,
            locationId: employee.locationId,
            startDate: employee.startDate,
            rate: employee.rate
        }

        return fetch(`http://localhost:8088/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/employees")
        })

    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="name">Location:</label>
                    <select required autoFocus className="locationList" onChange={
                        (evt) => {
                            const copy = { ...employee }
                            copy.locationId = parseInt(evt.target.value)
                            update(copy)
                        }
                    }
                    ><option name="locationList" className="form-control" value="">Employee Store</option>
                        {locations.map(location => {
                                return <option
                                    name="locationList"
                                    className="form-control"
                                    value={location.id}
                                    key={`location--${location.id}`}
                                >{location.nickName}</option>
                            }
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Start Date:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="MM/DD/YYYY"
                        value={employee.startDate}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.startDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee's Hourly Rate"
                        value={employee.rate}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.rate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
            onClick = {(clickEvent) => handleSaveEmployee(clickEvent)}
            className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}