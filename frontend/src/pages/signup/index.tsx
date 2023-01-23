import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/home.module.scss'
import logoImg from '../../../public/international-school-branco.png'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from "@/contexts/AuthContext";

export default function SignUp() {

    const { signUp } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleSingup(event: FormEvent) {
        event.preventDefault();

        if (name === '' || email === '' || password === '' || lastName === '') {
            alert('Preencha os dados do formulario');
            return;
        }

        setLoading(true);

        let data = {
            name,
            email,
            password,
            lastName
        }

        await signUp(data);

        setLoading(false);
    }

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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            placeholder='Digite seu sobrenome'
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

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