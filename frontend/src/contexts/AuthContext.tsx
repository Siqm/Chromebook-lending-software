import { api } from "@/services/apiClient";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useState, useEffect } from "react";
import Router from 'next/router'

type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean,
    SignIn: (credentials: SignInProps) => Promise<void>
    SignOut: () => void
    SignUp: (credentials: SignUpProps) => Promise<void>
}

type UserProps = {
    id: string,
    email: string,
    name: string
}

type SignInProps = {
    email: string,
    password: string
}

type SignUpProps = {
    email: string,
    name: string,
    password: string
    lastName: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function SignOut() {
    try {

    } catch(error) {

    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    useEffect(() => {

        const {'@nextauth.token': token} = parseCookies();

        if(token) {
            api.get('/me').then(response => {
                const {id, name, email} = response.data

                setUser({
                    id,
                    name,
                    email
                })
            })
            .catch(() => {
                SignOut()
            })
        }
    }, [])

    async function SignIn({ email, password }: SignInProps){
        try {
            const response = await api.post('/authenticate', {
                email,
                password
            })

            const { id, name, token } = response.data

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setUser({
                id,
                name,
                email,
            })

            api.defaults.headers['Authorization']= `Bearer ${token}`

            Router.push('/dashboard')
        } catch (error) {
            alert('Erro')
        }
    }

    async function SignUp({name, email, password, lastName}: SignUpProps) {
        try {
            const response = await api.post('/register', {
                name,
                email,
                password
            })
        } catch (error) {
            
        }
    }

    return (
        <AuthContext.Provider value={
            { user, isAuthenticated, SignIn, SignOut, SignUp}
        }>
            {children}
        </AuthContext.Provider>
    )
}