import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const ThemeContext = createContext()

export const Tema = ({children}) => {

    const [theme, setTheme] = useState('claro')

   async function salvarTemaNoDispositivo(tema){
         AsyncStorage.setItem('@tema', tema)
         setTheme(tema)
   }

   const alterarTema = () => {

      const tema = theme == 'claro' ? 'escuro' : "claro"
      if(tema) {
         salvarTemaNoDispositivo(tema)
         setTheme(tema)
      }
   }

    useEffect(async () => {

      const temaSalvo = await AsyncStorage.getItem("@tema")
      if(temaSalvo){
         setTheme(temaSalvo)
      }
    }, [])

    return ( 
        <ThemeContext.Provider value={{theme, setTheme, alterarTema}}>
                {children}
        </ThemeContext.Provider>
     );
}

 
