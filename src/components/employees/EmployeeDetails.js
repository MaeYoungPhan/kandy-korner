import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const  [employee, updateEmployee] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=location&_expand=user&userId=${employeeId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleEmployee = data[0]
                    updateEmployee(singleEmployee)
                })
        },
        [employeeId]
    )

    return <section className="employee" >
    <header className="employee_header">{employee?.user?.fullName}</header>
    <div>Email: {employee?.user?.email}</div>
    <div>Store: {employee?.location?.nickName}</div>
    <footer className="employee_footer">Store address: {employee?.location?.address}</footer>
</section>
}