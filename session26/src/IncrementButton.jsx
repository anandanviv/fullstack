import { Button } from "@mui/material"

function IncrementButton({handler}){
    console.log("increment button rerendered")
    return <Button onClick={handler}>+</Button>
}

export default IncrementButton