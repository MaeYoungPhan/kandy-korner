import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const  [customer, setCustomer] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleCustomer = data[0]
                    setCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    return <section className="one_customer" >
    <Link to={`/customers/${customer?.id}/edit`} className="customer_header">{customer?.user?.fullName}</Link>
    <div>Email: {customer?.user?.email}</div>
    <div>Loyalty: {customer.loyaltyNumber}</div>
    <footer className="customer_footer">A valued customer.</footer>
</section>
}