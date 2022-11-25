import { useEffect, useState } from "react"
import "./orders.css"

export const Orders = () => {
    const [purchases, setPurchases] = useState([])
    const [filteredPurchases, setFiltered] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/Purchases?_expand=product`)
            .then(response => response.json())
            .then((purchasesArray) => {
                setPurchases(purchasesArray)
            })
        },
        [] 
    )

    //Find the current user for the cart
    // const userPurchases = purchases.filter(purchase => purchase.userId === currentUser.id)

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    
    useEffect(
        () => {
            setFiltered(purchases.filter((purchase) => purchase.userId === kandyUserObject.id))
            },
        [purchases]
        )

    return <>

    <section className="cart">
    
    <h2 className="cart-title">Your Cart</h2>
        {
            filteredPurchases.map(
                (userPurchase) => {
                return <div className="cartItems" key={`purchase--${userPurchase.id}`}>
                        <p>Item: {userPurchase?.product?.name}</p>
                        <p>Price: ${userPurchase?.product?.price}</p></div>
                }
            )
        }
    </section>
    </>
}