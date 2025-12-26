import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"
import counterStyle from "./Counter.module.css"
import styled from 'styled-components';
import {createPortal} from "react-dom"
import {Box, Button, CircularProgress, Modal, Paper, Typography} from "@mui/material"
import DialogBox from "./DialogBox";
import { LoginContext } from "./context/LoginContext";
import { CartContext } from "./context/CartContext";
import {useDispatch, useSelector} from "react-redux"
import { increase, decrease } from "./redux/reducer";
import IncrementButton from "./IncrementButton";

function PortalComponent({children}){
    let portalDiv= document.getElementById("portal")
    return createPortal(children,portalDiv)
}


const WelcomeUser=React.memo(({userName})=>{
    console.log("username component rendered")
    return (<Typography>Welcome {userName}</Typography>)
})
function Counter() {

    const {isUserLoggedin} = useContext(LoginContext)
    
    const Amazon = styled.button`
    color:yellow;
    background-color:green
    `
        const count = useSelector(store=>store.counter.count)


    // let {count,setCount}=useContext(CartContext)

    const multiplyby2=useMemo(()=>{
        console.log("multiplication called")
        return count*2
    },[count])

    let [multipleValue, setMultipleValue] = useState(0)

    const dispatch = useDispatch()
   

let [loader,setLoader]=useState(false)
    function decreaseHandler(){
        dispatch(decrease())
    }

    const increment =useCallback(function increaseHandler(){
        dispatch(increase())
    },[])

    useEffect(()=>{
        console.log("component is mounted")
    },[])

    // useEffect(()=>{
    //     console.log("component is updated")
    //     setLoader(true)
    //     setTimeout(()=>{
    //     setLoader(false)
    //     },2000)

    // },[count])
   

    useEffect(()=>{
        return ()=>{
            console.log("component is unmounted")
        }
    },[])

    // if(count==3){
    //     alert("")
    // }

   
    let a=0;



    const[isOpen,setIsOpen]=useState(false)

    function closeDialog(){
       setIsOpen(false)
    }

    function handleClick(){
        let multpliedValue = multiplyby2
        setMultipleValue(multpliedValue)

    }

    return <>

    {isUserLoggedin?<WelcomeUser userName="mathiarasan"/>:""}
    {/* {count==3?<PortalComponent>

        <div style={{height:"500px"}}>
            Warning Error Ahead
        </div>
    </PortalComponent>:null}
        <p>this is Counter</p> */}
     {/* <Modal
     ></Modal>       */}



    {count==3?<BasicModal/>:null}        
        <div className={counterStyle.counter}>

            <Button onClick={decreaseHandler}>-</Button>
            {loader?<CircularProgress />:<p>{count}</p>}
            
            <IncrementButton handler={increment}></IncrementButton>
            <Typography>Multiple of 2: {multipleValue}</Typography>
            <Button variant="contained" onClick={handleClick}>Multiply</Button>
        </div>
        <Modal open={isOpen}>
            <Paper style={{position:"absolute",top:"40%",left:"40%",width:"500px",height:"150px"}}>

            <Typography>Warning error ahead donot increase further</Typography>
            <Button onClick={()=> setIsOpen(false)}>ok</Button>
            </Paper>
        </Modal>
    </>
}
export default Counter