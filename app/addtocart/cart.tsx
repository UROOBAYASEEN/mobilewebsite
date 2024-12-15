
import { createContext } from "react";
 
interface contextinterface{

    cart:string[]
    setcart:React.Dispatch<React.SetStateAction<any[]>>
}


export const Cartcontext=createContext<contextinterface|undefined>(undefined)