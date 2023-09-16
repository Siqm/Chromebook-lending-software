import Header from '@/components/Header'
import { Input } from '@/components/ui/Input'
import Head from 'next/head'
import styles from './styles.module.scss'
import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { api } from '@/services/apiClient'
import { canSSRAuth } from '@/util/canSSRAuth'

export default function Cadastrar() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    async function handleNewResponsavel(event: FormEvent) {
        
        try {
            const response = await api.post('/responsavel', {
                name,
                phone,
                email
            })

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head><title>Degraus - cadastrar Responsavel</title></Head>
            <Header/>

            <div className={styles.container}>
                <h1>Cadastrar Responsavel</h1>
                <form onSubmit={handleNewResponsavel}>
                    <Input 
                        placeholder='Nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input 
                        placeholder='Telefone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type='submit'>Cadastrar</Button>
                </form>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return{ 
        props: {}
    }
})