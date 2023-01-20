import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import * as dotenv from 'dotenv'
import { AuthProvider } from '@/contexts/AuthContext'
dotenv.config()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
  )
}
