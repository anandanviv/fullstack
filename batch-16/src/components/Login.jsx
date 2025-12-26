import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

function Login({setLogin}){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    function handleLogin(){
        // send to backend
        if(email=="admin" && password=="admin"){
            setLogin(true)
        }else{
            alert("wrong credentials")
        }
        
    }

    return(
        <>
        <Box sx={{
    display: "flex",
    flexDirection: "column",
    maxWidth:" 50%",
    alignItems: "center",
    gap: "20px",
    border: "1px solid blue",
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    padding:"20px"
}}>

            <Typography>Login</Typography>
        <TextField onChange={(event)=>setEmail(event.target.value)} type="email" required placeholder="type your email here" value={email}></TextField>
        <TextField onChange={(event)=>setPassword(event.target.value)} type="password" required placeholder="Password" value={password}></TextField>
        <Button onClick={handleLogin} variant="contained">Login</Button>

        </Box>
        

        
        </>
    )
}
export default Login