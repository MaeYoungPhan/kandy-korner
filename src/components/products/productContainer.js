import { useState } from "react"
import { ProductList } from "../products/productsList"
import { ProductSearch } from "../products/productSearch"
import "./products.css"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState()

    return <>
        <ProductSearch setterFunction={setSearchTerms}/>
        <ProductList searchTermState={searchTerms}/>
    </>
}