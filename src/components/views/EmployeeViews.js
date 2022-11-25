import { Outlet, Route, Routes } from "react-router-dom"
import { ProductForm } from "../products/productForm"
import { LocationList } from "../locations/locationsList"
import { ProductContainer } from "../products/productContainer"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerDetails } from "../customers/CustomerDetails"
import { CustomerList } from "../customers/CustomerList"
import { CustomerEdit } from "../customers/CustomerEdit"

export const EmployeeViews = () => {
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
                <Route path="product/create" element={ <ProductForm /> } />
                <Route path="employees" element={ <EmployeeList /> } />
                <Route path="employees/form" element={ <EmployeeForm /> } />
                <Route path="employees/:employeeId" element={ <EmployeeDetails /> } />
                <Route path="customers" element={ <CustomerList /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails /> } />
                <Route path="customers/:customerId/edit" element={ <CustomerEdit /> } />

            </Route>
        </Routes>
    )
}