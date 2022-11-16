import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/locationsList"
import { ProductContainer } from "../products/productContainer"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
               <div className="content">
                <h1 className="header_text">Kandy Korner</h1>

                <img className="hero" src="https://cdn.shopify.com/s/files/1/1577/8257/t/9/assets/slide_4.jpg?v=156118927317865513961481210552"></img>
                </div>
                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
				<Route path="products" element={ <ProductContainer /> } />

            </Route>
        </Routes>
    )
}