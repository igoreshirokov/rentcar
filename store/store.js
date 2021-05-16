import { useState, useEffect, createContext } from 'react'

export const CatalogContext = createContext(false)


export const CatalogContextProvider = ({ children }) => {



    return (
        <CatalogContext.Provider value="">
            {children}
        </CatalogContext.Provider>
    )
}