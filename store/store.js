import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

export const StoreContext = React.createContext()

const langReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return { ...state, lang: action.payload }

        default:
            return { state }
    }
}

export const StoreContextProvider = ({ children }) => {
    const [cookies, setCookie] = useCookies(['lang'])

    const defaultContext = {
        lang: cookies.lang || 'et'
    }
    const [state, dispatch] = React.useReducer(langReducer, defaultContext)
    const setLang = (lang) => {
        setCookie('lang', lang, { path: '/'});
        dispatch({type: 'CHANGE', payload: lang});
    }

    return (
        <StoreContext.Provider value={{
            state,
            setLang
        }}>
            {children}
        </StoreContext.Provider>
    )
}