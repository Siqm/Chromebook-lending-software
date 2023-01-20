import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/home.module.scss'
import logoImg from '../../public/international-school-branco.png'
import { Input } from '@/components/ui/Input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Degraus - Faça Login</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image src={logoImg} alt='Logo Colégio Degraus International School' className={styles.logo} />

                <div className={styles.login}>
                    <form>
                        <Input
                            placeholder='bruno.travolta@email.com'
                            type='email'
                        />

                        <Input
                            placeholder='******************'
                            type='password'
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
