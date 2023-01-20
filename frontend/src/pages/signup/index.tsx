import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/home.module.scss'
import logoImg from '../../../public/international-school-branco.png'

export default function SignUp() {
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
                            placeholder='Digite seu nome'
                            type='text'
                        />

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

                    <Link href='/' className={styles.text}>
                        Já possui uma conta? Faça login!
                    </Link>
                </div>
            </div>
        </>
    )
}