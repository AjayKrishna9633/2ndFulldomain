import { Children, createContext, useState } from "react";


export const CounterContext = createContext();

export  function ContextProvider({children}){
    let [num,set]=useState(0);

    function inc(){
        set((pre)=>pre+1);
    }
    function dce(){
        set((pre)=>pre+1);
    }
    return(
        <CounterContext.Provider value={{num,inc,dce}} >
{children}
        </CounterContext.Provider>
    )
}