import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const isCorrectCredentials = credentials =>
credentials.username === process.env.NEXTAUTH_USERNAME &&
credentials.password === process.env.NEXTAUTH_PASSWORD

const options = {
    providers: [
        Providers.Credentials({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials, req) => {
                if (isCorrectCredentials(credentials)) {
                    const user = { id: 1, name: "Admin" }
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            },
        })
    ],
    callbacks: {
        async session(session, token) {
            session.accessToken = token.accessToken
            return session
        }
    },
    pages: {
        signIn: '/admin/login',
        // signOut: '/admin/login',
        // error: '/admin/login', // Error code passed in query string as ?error=
        // verifyRequest: '/admin/login', // (used for check email message)
        // newUser: null 
    },

}
export default (req, res) => NextAuth(req, res, options)