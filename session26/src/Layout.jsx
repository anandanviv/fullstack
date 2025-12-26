import { Outlet, Route, Routes } from "react-router-dom"
import AboutUs from "./components/Aboutus"
import Contact from "./components/Contact"
import Home from "./components/Home"
import ResponsiveAppBar from "./Header"
import Header from "./HeaderNew"
import Counter from "./Counter"
import { ErrorBoundary } from "react-error-boundary"
import ProductDetail from "./components/ProductDetail"
import Shop from "./components/Shop"
import Login from "./components/Login"
import React, { Suspense, useContext } from "react"
import { LoginContext } from "./context/LoginContext"
import Cart from "./pages/Cart"
import Admin from "./components/Contact"

const HomeLazy = React.lazy(()=>{
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(import('./components/Home'))
    },1000)
        
    })
})


function Layout(){

    const {isUserLoggedin} = useContext(LoginContext)
    return (
    isUserLoggedin?
    <>
    <Header />
    <div>
        <Routes>
            
                <Route path="/home" element={
                    <>
                    <Suspense fallback={<div>home page is loading</div>}>
                    <HomeLazy/>
                    </Suspense>
                    </>
                }>
                    {/* <Route path="shop" element={<Shop/>}></Route> */}
                </Route>
                <Route path="/aboutus" element={<AboutUs/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
               <Route path="/cart" element={<Cart/>}></Route> 
                <Route path="/counter" element={
                        <Counter/>
                    }></Route>

                    <Route path="product-detail" element={<ProductDetail/>}></Route>
        </Routes>

       
    </div>
    </>:<Login/>)
}
export default Layout