import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import ProductCard from "./ProductCard"
import ProductList from "./ProductList"
import Testimonials from "./Testimonials"

function Home(){
    return <>
    {/* <Link to="/home/shop" >Shop now</Link> */}
     <ProductList/>
     <Testimonials/>
    </>
}
export default Home