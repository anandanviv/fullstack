import { useEffect, useState } from "react"
import counterStyle from "./Counter.module.css"
import styled from 'styled-components';
import {createPortal} from "react-dom"
import {Box, Button, CircularProgress} from "@mui/material"
import BasicModal from "./Modal";
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

    return <>
    {/* {count==3?<PortalComponent>

        <div style={{height:"500px"}}>
            Warning Error Ahead
        </div>
    </PortalComponent>:null}
        <p>this is Counter</p> */}


    {count==3?<BasicModal/>:null}        
        <div className={counterStyle.counter}>
            <Button onClick={decrease}>-</Button>
            {loader?<CircularProgress />:<p>{count}</p>}
            
            <Button onClick={increase}>+</Button>
        </div>
    </>
}
export default Counter