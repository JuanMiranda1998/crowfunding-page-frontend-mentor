'use client'
import react, { createContext, useContext, useState } from "react"

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    // useState
    const [modalEnabled, setModalEnabled] = useState(false)

    const toggleModalEnabled = () => {
        setModalEnabled(!modalEnabled)
    }
    
    return (
        <GlobalContext.Provider value={{ modalEnabled, toggleModalEnabled }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}