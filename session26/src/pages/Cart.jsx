import { Box, Divider, ListItemAvatar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useSelector } from "react-redux"

function Cart() {

    let productList = useSelector(state=>state.cart.productList)
    return <>
        <Table sx={{ marginLeft: "24px" }}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Product
                    </TableCell>
                    <TableCell>
                        Price
                    </TableCell>
                    <TableCell>
                        Quantity
                    </TableCell>
                    <TableCell>
                        Total
                    </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>

                {productList.map((item) => {
                    return <TableRow>
                        <TableCell>
                            {item.title}
                        </TableCell>
                        <TableCell>
                            {item.price}
                        </TableCell>
                        <TableCell>
                            {item.quantity?item.quantity:1}
                        </TableCell>
                        <TableCell>
                            {item.price * (item.quantity?item.quantity:1)}
                        </TableCell>
                    </TableRow>
                })
                }

            </TableBody>
        </Table>
        <Box sx={{ display: "flex", flexDirection: "column", width: "30%", marginLeft: "24px", marginTop: "50px", gap: "16px" }}>

            <Typography variant="h4">
                Cart Totals
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="p">
                    sub total
                </Typography>
                <Typography variant="p">
                    $59.00
                </Typography>

            </Box>

            <Divider />



            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="p">
                    Shipping Fee
                </Typography>
                <Typography variant="p">
                    $59.00
                </Typography>


            </Box>
            <Divider />


            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="p">
                    Total
                </Typography>
                <Typography variant="p">
                    $59.00
                </Typography>

            </Box>



        </Box>
    </>
}
export default Cart