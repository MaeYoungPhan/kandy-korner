import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const CustomerEdit = (event) => {
    const {customerId} = useParams()
    const  [customer, assignCustomer] = useState({
        loyaltyNumber: 0,
    })

    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the customer list
    */
   const navigate = useNavigate()

   // Get customer state from API

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers/${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    assignCustomer(data)
                })
        },
        [customerId]
    )

    const handleUpdateButtonClick = (event) => {
        event.preventDefault()

        //Fetch for PUT request to replace loyalty number
        return fetch(`http://localhost:8088/customers/${customerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/customers")
        })
    }

    return (
        <form className="customerForm">
            <h2 className="customerForm__title">Edit Customer Loyalty</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="loyaltyNumber">Loyalty Number:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={customer.loyaltyNumber}
                        onChange={
                            (evt) => {
                                const copy = {...customer}
                                copy.loyaltyNumber = parseInt(evt.target.value)
                                assignCustomer(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
            onClick = {(clickEvent) => handleUpdateButtonClick(clickEvent)}
            className="btn btn-primary">
                Update
            </button>
        </form>
    )
}