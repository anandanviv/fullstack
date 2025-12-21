import { Route, Routes } from "react-router-dom"
import AboutUs from "./components/Aboutus"
import Contact from "./components/Contact"
import Home from "./components/Home"
import ResponsiveAppBar from "./Header"
import Header from "./HeaderNew"
import Counter from "./Counter"
import { ErrorBoundary } from "react-error-boundary"
import ProductDetail from "./components/ProductDetail"


function Layout(){
    return (<>
    <Header />
    <div>
        <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/aboutus" element={<AboutUs/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/counter" element={
                   
                        <Counter/>
                    }></Route>

                    <Route path="product-detail" element={<ProductDetail/>}></Route>

        </Routes>

       
    </div>
    </>)
}
export default Layout