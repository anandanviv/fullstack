import { Box, Breadcrumbs, Button, Menu, MenuItem, Rating, Select, Tab, Tabs, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import BasicTabs from "./ProductTab"
import ProductImage from '../../src/assets/img_1.png'

function ProductDetail(){
    return(<>
            <img src={ProductImage}></img>    
            <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
</Breadcrumbs>


<Typography variant="h1">Plain White Shirt</Typography>

<Rating
        name="simple-controlled"
        value={3} readOnly
      />
      <Typography>(15)</Typography>
      <Typography variant="h4">$59.00</Typography>


      <Typography>
        A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.
      </Typography>



      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={1}
    label="Age"
  >
    <MenuItem value={1}>Select Size</MenuItem>
    <MenuItem value={10}>Small S</MenuItem>
    <MenuItem value={20}>Medium M</MenuItem>
    <MenuItem value={30}>Large L</MenuItem>
  </Select>
  <Button variant="contained"> add to cart</Button>

   <Typography variant="p">
                Category: Men, Polo, Casual
                Tags: Modern, Design, cotton

            </Typography>


            <BasicTabs/>
    </>)
}
export default ProductDetail