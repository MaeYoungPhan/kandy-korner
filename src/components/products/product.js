import { Link, useNavigate } from "react-router-dom"

export const Product = ({ productObject, currentUser }) => {

    let navigate = useNavigate()

    const buttonOrNoButton = () => {
        if (!currentUser.staff) {
           return <button className="btn-purchase"
                    onClick={() => {
                        fetch(`http://localhost:8088/Purchases`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                userId: currentUser.id,
                                productId: productObject.id,
                                quantity: 1
                            })
                        })
                        .then(response => response.json())
                        .then(() => {
                            //Get State from API again
                            navigate("/products")
                        })
                    }}
                    >Add To Cart</button>
        }
        else {
            return ""
        }
    }


    return <section className = "product" key={`product--${productObject.id}`}>
        <header className="product--header">{productObject.name}</header>
        <img src={productObject.img} width="100"></img>
        <p> Category: {productObject.productType.category}</p>
        <p> Price: ${productObject.price} ea. </p> { buttonOrNoButton() }
    </section>
}