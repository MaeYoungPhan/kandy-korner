import { Outlet, Route, Routes } from "react-router-dom"
import { ProductForm } from "../products/productForm"
import { LocationList } from "../locations/locationsList"
import { ProductList } from "../products/productsList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                <div className="header">
                {/* <img src={require('/assets/kandylogo.jpg').default} alt="kandy korner logo"/> */}
                <h1 className="header_text">Kandy Korner</h1>
                </div>
                    <div className="hero"><img src="https://cdn.shopify.com/s/files/1/1577/8257/t/9/assets/slide_4.jpg?v=156118927317865513961481210552"></img></div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
				<Route path="products" element={ <ProductList /> } />

                <Route path="product/create" element={ <ProductForm /> } />
            </Route>
        </Routes>
    )
}