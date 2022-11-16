import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./products.css"

export const ProductList = ( {searchTermState} ) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [expensive, setExpensive] = useState(false)
    // const [openOnly, updateOpenOnly] = useState(false)
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect (
        () => {
            const searchedProducts = products.filter(product => {
                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedProducts)
        },
        [ searchTermState ]
    )

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


    return <>
    <section className="products_main">
    {
        kandyUserObject.staff
            ? <>
             <button className="button" onClick={ () => { setExpensive(true) } }>Top Priced</button>
             <button className="button" onClick={ () => { setExpensive(false) } }>Show All</button>
             <button className="button" onClick={() => navigate("/product/create")}>Create Product</button>
             </>
            : <>
            </>
    }
    
    <h2 className="product--title">List of Products</h2>

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
    </section>
    </>
}