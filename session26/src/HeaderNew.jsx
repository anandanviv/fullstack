import { AppBar, Badge, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext, useState } from 'react';
import { LoginContext } from './context/LoginContext';
import { CartContext, CartContextProvider } from './context/CartContext';

function Header(){

    const {setUserLoggedin}=useContext(LoginContext)


    const {count}=useContext(CartContext)


    return(
    <>
    <AppBar color='#E3D026' position='relative'>
        <div style={{padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography variant="h4">North Star</Typography>
        <div style={{display:"flex", gap:"25px"}}> 
             <Toolbar sx={{ gap: 4 }}>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}><Link to="/home">HOME</Link></Button>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}><Link to="/aboutus">ABOUT US</Link></Button>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}><Link to="/admin">Admin</Link></Button>
      </Toolbar>

        </div>
           <div>
             <Badge badgeContent={count} color="primary">
              <Link to="/cart">
                 <ShoppingCartIcon/>
                 </Link>
     
        </Badge>
{/*         
            <LogoutIcon onClick={()=>{
              setUserLoggedin(false)
              localStorage.setItem("isLoggedin",false)
              }}/>
             <AccountBoxIcon color='primary'/>
        <MenuIcon color='primary'/> */}

       


           </div>
           
        </div>
    </AppBar>

    </>
    )
}
export default Header