// import { BASE_URL } from '../../Constants'
// import { useState, useEffect } from "react"
// import { useRouter } from 'next/router'

// export const AutoSelect = () => {
//     const [autos, setAutos] = useState(false)
//     const [select, setSelect] = useState()
//     const router = useRouter()

//     function handleChange(event) {
//         setSelect(event.target.value);
//     }

//     useEffect(async () => {
//         const res = await fetch(BASE_URL + 'api/catalog')
//         const json = await res.json()
//         setAutos(json)
//         setSelect(router.query.id)
//     }, [])



//     return (
//         <>
//             <select value={select} onChange={handleChange}>
//                 {!autos ? <p>Loading...</p> : (
//                     autos.map(auto => {
//                         return (
//                             <option value={auto.model}>{auto.model}</option>
//                         )
//                     })
//                 )}
//             </select>
//         </>
//     )
// }



import { BASE_URL } from '../../Constants'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export const AutoSelect = () => {
    const [autos, setAutos] = useState(false)
    const router = useRouter()
    const [select, setSelect] = useState('')

    useEffect(async () => {
        const res = await fetch(BASE_URL + 'api/catalog')
        const json = await res.json()
        setAutos(json)
    }, [])

    function hundlerChange(e) {

        const options = e.target.childNodes

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                // console.log(options[i].dataset.id)
                router.push({
                    pathname: router.pathname,
                    query: {
                        id: options[i].dataset.id
                    },
                }, undefined, { scroll: false }
                )
            }
        }

    }


    return (
        <>
            <select onChange={hundlerChange}>
                {!autos ? <p>Loading...</p> : (
                    autos.map(auto => {
                        if (parseInt(router.query.id) == auto.id) {
                            return (
                                <option key={auto.model} data-id={auto.id} value={auto.model} selected>{auto.model}</option>
                            )
                        }
                        return (
                            <option key={auto.model} data-id={auto.id} value={auto.model} >{auto.model}</option>
                        )
                    })
                )}
            </select>
        </>
    )
}