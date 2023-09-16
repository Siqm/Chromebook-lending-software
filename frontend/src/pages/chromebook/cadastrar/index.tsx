import Header from '@/components/Header'
import { Input } from '@/components/ui/Input'
import Head from 'next/head'
import styles from './styles.module.scss'
import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { api } from '@/services/apiClient'
import { canSSRAuth } from '@/util/canSSRAuth'

export default function Cadastrar() {

    const [serial, setSerial] = useState('')

    async function handleNewChromebook(event: FormEvent){
        event.preventDefault();

        try {
            const response = await api.post('/chromebook', {
                serial
            })

            console.log("sucesso")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head><title>Degraus - Cadastrar Chromebook</title></Head>
            <Header />

            <div className={styles.container}>
                <h1>Cadastrar novo Chromebook</h1>
                <form onSubmit={handleNewChromebook}>
                    <Input
                        placeholder="Insira o Serial"
                        value={serial}
                        onChange={(e) => setSerial(e.target.value)}
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