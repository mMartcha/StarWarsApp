import { createContext, ReactNode, useState } from "react";
import React from "react";
import { ImageSourcePropType } from "react-native";

 


type MapContextProviderProps={
    children: ReactNode
}
export const StarwarsContext = createContext({} as MapContextProviderProps)

export function StarwarsContextProvider({children}:MapContextProviderProps ){

   
   
    return(
        <StarwarsContext.Provider value={{
           
        }}>
            {children}
        </StarwarsContext.Provider>
    )

}