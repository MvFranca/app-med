import { createContext, useState } from "react";

export const AuthenticatorContext = createContext({});

export const AuthenticatorProvider = ({children}) => {

    const [user, setUser] = useState({})

    function login(email, password) {
        if(email == "teste@gmail.com" && password == "123"){
            setUser({
                name: "Marcos Vinicius",
                email: "teste@gmail.com"
            })
        }
    }

    return(
        <AuthenticatorContext.Provider value={{user, setUser, login}}>
            {children}
        </AuthenticatorContext.Provider>
    )
}