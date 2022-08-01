import { createContext } from "react";


export type AuthContent = {
    isAuth: boolean
    setIsAuth:(value:boolean) => void
  }
export const AuthContext = createContext<AuthContent>({
  isAuth:false, 
  setIsAuth: () => {},
  })

// export const AuthContext=createContext()



