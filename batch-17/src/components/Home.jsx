import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

function Home(){
    return <>
    <Link to="/home/shop" >Shop now</Link>
      <Outlet/>
    </>
}
export default Home