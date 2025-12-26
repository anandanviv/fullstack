import { createContext, useState } from "react";
import Login from "../components/Login";

export const LoginContext = createContext();

const isLoggedinLocal = localStorage.getItem("isLoggedin")
export const LoginProvider = ({children})=>{



    const [isUserLoggedin,setUserLoggedin] = useState(isLoggedinLocal=="true"?true:false)
    return (
        <LoginContext.Provider value={{isUserLoggedin,setUserLoggedin
        }}>
            {children}
        </LoginContext.Provider>
    )
}