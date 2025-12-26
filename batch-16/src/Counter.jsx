import { useEffect, useState } from "react"
import counterStyle from "./Counter.module.css"
import styled from 'styled-components';
import {createPortal} from "react-dom"
import {Box, Button, CircularProgress, Modal, Paper, Typography} from "@mui/material"
import DialogBox from "./DialogBox";
function PortalComponent({children}){
    let portalDiv= document.getElementById("portal")
    return createPortal(children,portalDiv)
}

function Counter() {
    
    const Amazon = styled.button`
    color:yellow;
    background-color:green
    `

    let[count,setCount]=useState(0)

let [loader,setLoader]=useState(false)
    function decrease(){
        count = count-1
        setCount(count)
        console.log("counter value changed to ",count)
    }

    function increase(){
        count = count+1
        setCount(count)
        console.log("counter value changed to ",count)

        if(count==2){
            setIsOpen(true)
        }
    }

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

   


    if(count>3){
        return new Error("something went wrong")
    }


    const[isOpen,setIsOpen]=useState(false)

    function closeDialog(){
       setIsOpen(false)
    }

    return <>
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

            <Button onClick={decrease}>-</Button>
            {loader?<CircularProgress />:<p>{count}</p>}
            
            <Button onClick={increase}>+</Button>
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