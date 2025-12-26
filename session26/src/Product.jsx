import ProductImage from "./assets/product.jpeg"

function Product({imagePath,productTitle,productPrice}){
    return <div style={{display:"flex", gap:"30px"}}>
    <img src={imagePath}></img>
    <div>
    <h1>{productTitle}</h1>
    <h2>{productPrice}</h2>
    </div>
    
    </div>
}

export default Product