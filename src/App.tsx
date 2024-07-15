import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import apiCallService from "./service/ApiCallService";
import {setCompaniesMap} from "./store/companies/company.action";
import {setProductsMap} from "./store/products/product.action";
import {useDispatch} from "react-redux";
import Bakery from "./components/Bakery";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCompaniesMap = async () => {
            try {
                const response = await apiCallService.fetchCompanies();
                console.log(response)
                const companiesArray = response.data;
                dispatch(setCompaniesMap(companiesArray));
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        getCompaniesMap();
        const getProductsMap = async () => {
            try {
                const response = await apiCallService.fetchProducts()
                const productArray = response.data;
                console.log(productArray)
                dispatch(setProductsMap(productArray))
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getProductsMap();
    }, [dispatch]);
  return (
   <>
       <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Register" element={<Register/>}/>
           <Route path="/Products" element={<Products/>}/>
           <Route path="/Cart" element={<Cart/>}/>
           <Route path="/Shop/Bakery" element={<Bakery/>}/>
       </Routes>
   </>
  );
}

export default App;
