import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/home.module.scss'
import logoImg from '../../public/international-school-branco.png'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Degraus - Faça Login</title>
            </Head>

            <div className={styles.containerCenter}>

                <div className={styles.login}>
                    <Image src={logoImg} alt='Logo Colégio Degraus International School' className={styles.logo} />
                    <form>
                        <Input
                            placeholder='Digite seu email'
                            type='email'
                        />

                        <Input
                            placeholder='Digite sua senha'
                            type='password'
                        />

                        <Button loading={false}>
                            Acessar
                        </Button>
                    </form>

                    <Link href='#' className={styles.text}>
                        Não possui uma conta? Cadastre-se!
                    </Link>
                </div>
            </div>
        </>
    )
}
