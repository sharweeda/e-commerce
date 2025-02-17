import { createContext, useEffect, useState } from "react";

export const UserContext =createContext();

export default function UserContextProvider({children}){
    let [Token , setToken] = useState(null)
    useEffect(()=>{
      setToken(localStorage.getItem('token'));
    },[])
return<>
  <UserContext.Provider value={{Token ,setToken}}>
      {children}
  </UserContext.Provider>
  </>

}

