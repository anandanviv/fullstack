import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { addtocart } from "../redux/CartReducer"

function ProductCard({product}){
const dispatcher = useDispatch()

function handleCartAddition (){
    dispatcher(addtocart(product))
}
    
    return(<>
    <Card style={{maxWidth:"295px"}}>
        <CardMedia
        component="img"
        alt="product image"
        image={product.image_url}
      />
        <CardContent>

            <Typography>
               {product.name}
            </Typography>
            <Typography>
               {product.price}
            </Typography>
            <Button onClick={handleCartAddition}>
                Add to card
            </Button>

        </CardContent>
    </Card>


    </>)
}
export default ProductCard
