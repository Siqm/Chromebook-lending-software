import { signOut } from '@/contexts/AuthContext'
import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenError } from './errors/AuthTokenError'

const url = process.env.BASEURL

export function setupAPIClient (ctx = undefined) {
    let cookies = parseCookies()

    const api = axios.create({
        baseURL: url,
        headers: {
            Authorizatrion: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response.status === 401) {
            if(typeof window !== undefined) {
                signOut();
            } else {
                return Promise.reject(new AuthTokenError)
            }
        }
        return Promise.reject(error)
    })

    return api
}