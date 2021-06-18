import React, { useReducer } from 'react'

export const FormContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload }
        case 'SET_SURNAME':
            return { ...state, surname: action.payload }
        case 'SET_EMAIL':
            return { ...state, email: action.payload }
        case 'SET_ADDRESS':
            return { ...state, address: action.payload }
        case 'SET_PHONE':
            return { ...state, phone: action.payload }
        case 'SET_PERSONALID':
            return { ...state, personalid: action.payload }
        case 'SET_AUTO':
            return { ...state, auto: action.payload }
        case 'SET_STARTDATE':
            return { ...state, startdate: action.payload }
        case 'SET_STARTTIME':
            return { ...state, starttime: action.payload }
        case 'SET_STOPDATE':
            return { ...state, stopdate: action.payload }
        case 'SET_STOPTIME':
            return { ...state, stoptime: action.payload }
        case 'SET_ADDITIONAL':
            return { ...state, additional: action.payload }
        default:
            return state
    }
}
const defaultState = {
    name: '',
    surname: '',
    email: '',
    address: '',
    phone: '',
    personalid: '',
    auto: false,
    startdate: '',
    starttime: '',
    stopdate: '',
    stoptime: '',
    additional: ''
}
export const FormContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, defaultState)
    const setForm = (type, payload) => {
        dispatch({ type: type, payload: payload})
    }
    return (
        <FormContext.Provider value={{
            state,
            setForm
        }}>
            {children}
        </FormContext.Provider>
    )
}