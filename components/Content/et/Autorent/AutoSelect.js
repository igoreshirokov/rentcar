import { useState, useEffect, useContext } from "react"
import { StoreContext } from '../../../../store/store'
import { FormContext } from '../../../../store/formContext'
import { useRouter } from 'next/router'
import { BASE_URL } from '../../../Constants'

export const AutoSelect = () => {
    const ctx = useContext(StoreContext)
    const ctxForm = useContext(FormContext)
    const { auto } = ctxForm.state
    const { catalog } = ctx.state
    async function setCatalog() {
        const res = await fetch(BASE_URL + 'api/catalog')
        const json = await res.json()
        ctx.setCatalog(json)

    }
    useEffect(() => {
        if (!catalog) {
            setCatalog()
        } else {
            if (!auto) {
                ctxForm.setForm('SET_AUTO', catalog[0]['model'])
            }
        }
    }, [])


function hundlerChange(e) {

    const options = e.target.childNodes

    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            ctxForm.setForm('SET_AUTO', options[i].value)
        }
    }

}


return (
    <>
        {!catalog ? <p>Loading...</p> : (
            <select onChange={hundlerChange}>
                {catalog.map(auto => {
                    if (ctxForm.state.auto == auto.id) {
                        return <option key={auto.model} data-id={auto.id} value={auto.model} selected>{auto.model}</option>
                    }
                    return (
                        <option key={auto.model} data-id={auto.id} value={auto.model} >{auto.model}</option>
                    )
                })}
            </select>
        )}
    </>
)
}