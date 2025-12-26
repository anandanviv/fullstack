function AmazonButton({buttonText}){
    return <><button onClick={clickEvent} style={{backgroundColor:"yellow",color:"black"}}>{buttonText}</button></>
}

function clickEvent(){
    alert("button clicked")
}
export default AmazonButton