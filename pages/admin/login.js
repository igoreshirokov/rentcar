import styles from '../../styles/admin.module.sass'
import { getCsrfToken, signIn } from 'next-auth/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login({ csrfToken }) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()

    function hundleSubmit(e) {
        e.preventDefault()
        signIn('credentials', { 
            username, 
            password, 
            callbackUrl: `${window.location.origin}/admin`
        })
    }

    function hundleChange (e) {
        const field = e.target
        if (field.name == 'username') {
            setUsername(field.value)
        }
        if (field.name == 'password') {
            setPassword(field.value)
        }
    }

    return (
        <div className={styles["auth"]}>
            <h1>Sign In</h1>
            {router.query.error && <div className={styles['auth-error']}>Error!</div>}
            <form onSubmit={hundleSubmit} onChange={hundleChange} >
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                <label>
                    <input value={username} type="text" name="username" />
                </label>
                <label>
                    <input value={password} type="password" name="password" />
                </label>
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}


//   import styles from '../../styles/admin.module.sass'
// import { getCsrfToken } from 'next-auth/client'



// export default function SignIn({ csrfToken }) {
//     return (
//         <div className={styles["auth"]}>
//             <h1>Sign In</h1>
//             <form method='post' action='/api/auth/signin/credentials'>
//             <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
//                 <label>
//                     <input type="text" name="username" />
//                 </label>
//                 <label>
//                     <input type="password" name="password" />
//                 </label>
//                 <button type="submit" className="button">Login</button>
//             </form>
//         </div>
//     )
// }

// export async function getServerSideProps(context) {
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context)
//       }
//     }
//   }