import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/home.module.scss'
import logoImg from '../../public/international-school-branco.png'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, FormEvent, useState } from 'react'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { SignIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        if (email === "" || password === "") {
            alert("preencha os campos")
            return
        }

        setLoading(true)

        let data = {
            email,
            password
        }

        await SignIn(data)

        setLoading(false)
    }
    
    return (
        <>
            <Head>
                <title>Degraus - Faça Login</title>
            </Head>

            <div className={styles.containerCenter}>

                <div className={styles.login}>
                    <Image src={logoImg} alt='Logo Colégio Degraus International School' className={styles.logo} />
                    <form onSubmit={handleLogin}>
                        <Input
                            placeholder='Digite seu email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder='Digite sua senha'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button loading={loading}>
                            Acessar
                        </Button>
                    </form>

                    <Link href='/signup' className={styles.text}>
                        Não possui uma conta? Cadastre-se!
                    </Link>
                </div>
            </div>
        </>
    )
}
