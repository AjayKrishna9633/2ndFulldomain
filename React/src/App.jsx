import { useEffect } from "react";

export default function App(){

useEffect(()=>{

console.log("mounted")

return ()=>console.log("unmounted")
},[])

  return( <>
  <h1>APP</h1>
  </>)
}

// age >20 mark 2nd least department =  engnieer