import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

export const StoreContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CATALOG":
            return { ...state, catalog: action.payload }
        case "CHANGE_LANG":
            return { ...state, lang: action.payload }

        default:
            return { state }
    }
}

export const StoreContextProvider = ({ children }) => {
    const [cookies, setCookie] = useCookies(['lang'])

    const defaultContext = {
        lang: cookies.lang || 'et',
        catalog: false
    }
    const [state, dispatch] = React.useReducer(reducer, defaultContext)
    const setLang = (lang) => {
        setCookie('lang', lang, { path: '/', secure: true, sameSite: 'Lax'});
        dispatch({type: 'CHANGE_LANG', payload: lang});
    }
    const setCatalog = (cars) => dispatch({ type: 'SET_CATALOG', payload: cars}) 
    return (
        <StoreContext.Provider value={{
            state,
            setLang,
            setCatalog
        }}>
            {children}
        </StoreContext.Provider>
    )
}