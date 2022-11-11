import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./products.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [expensive, setExpensive] = useState(false)
    // const [openOnly, updateOpenOnly] = useState(false)
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=productType`)
            .then(response => response.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            setFiltered(products.sort((a,b) => {const nameA = a.productTypeId;
                const nameB = b.productTypeId; if (nameA < nameB){ return -1;} if (nameA > nameB) {return 1;} return 0}))},
        [products]
    )

    useEffect(
        () => {
            if (expensive) {
               const expensiveItems = products.filter((product) => product.price >= 2.00)
               setFiltered(expensiveItems)
            }
            else {
                setFiltered(products)
            }
        },
        [expensive])



    // useEffect(
    //     () => {
    //         if (kandyUserObject.staff) {
    //             // for employees
    //             setFiltered(products)
    //         }
    //         else {
    //             ""
    //             // for customers
    //             // const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
    //             // setFiltered(myTickets)
    //         }
    //     },
    //     [products]
    // )

    // useEffect(
    //     () => {
    //         if (openOnly) {
    //            const openTicketArray = tickets.filter(ticket => {
    //             return ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""
    //            })
    //            setFiltered(openTicketArray)
    //         }
    //         else {
    //             const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
    //             setFiltered(myTickets)
    //         }
    //     },
    //     [openOnly]
    // )

    return <>
    {
        kandyUserObject.staff
            ? <>
             <button onClick={ () => { setExpensive(true) } }>Top Priced</button>
             <button onClick={ () => { setExpensive(false) } }>Show All</button>
             <button onClick={() => navigate("/product/create")}>Create Product</button>
             </>
            : <>
            </>
    }
    
    <h2>List of Products</h2>

    <article className="products">
        {
            filteredProducts.map(
                (product) => {
                    return <section className = "product" key={`product--${product.id}`}>
                        <header className="product--header">{product.name}</header>
                        <img src={product.img} width="100"></img>
                        <p> Category: {product.productType.category}</p>
                        <p> Price: ${product.price} ea.</p>
                    </section>
                }
            )
        }
    </article>
    </>
}