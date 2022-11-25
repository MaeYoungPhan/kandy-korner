import { Link } from "react-router-dom"

export const Employee = ({ id, fullName, email, getAllEmployees }) => {

    const fireEmployee = () => {
        return <button onClick={() => {
        fetch(`http://localhost:8088/users/${id}`, {
        method: "DELETE",
    })
        .then(() => {
            getAllEmployees()
        }) 
    }} className="fire_employee">Fire Employee</button>
}

    return <section className="employee" >
                <div>
                    <Link className="employee_header" to={`/employees/${id}`}>Name: {fullName}</Link>
                </div>
                <div>Email: {email}</div>
                <div>{fireEmployee()}</div>
            </section>
}